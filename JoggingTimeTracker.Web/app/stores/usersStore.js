'use strict';

import AppDispatcher from '../appDispatcher';
import StoreWithEvents from './StoreWithEvents';
import UserActions from '../actions/userActions';
import Constants from '../constants';
import NotificationsService from '../services/notificationsService';

let changeEvent = 'USERS_CHANGE';
let tokenKey = 'accessToken';

let storeWithEvents = new StoreWithEvents(changeEvent);

let state = {
  performApiCall: false,
  isRegistered: false,
  isAuthenticated: false,
  accessToken: '',
  registerInfo: {},
  logInInfo : {}
};

const register = (userInfo) => {
  state.performApiCall = true;
  state.registerInfo.email = userInfo.email;
  state.registerInfo.password = userInfo.password;
  state.registerInfo.confirmPassword = userInfo.confirmPassword;
  $.ajax({
    type: 'POST',
    url: '/api/Account/Register',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(userInfo)
  }).done((data) => {
    UserActions.registerSuccessful(data);
  }).fail((error) => {
    UserActions.registerFailed(error);
  });
};

const registerSuccessful = (serverResponse) => {
  state.performApiCall = false;
  state.isRegistered = true;
  NotificationsService.success('Successful registration', 'You successfully registered in the system. Use your credentials to log in now');
};

const registerFailed = (errorResponse) => {
  state.performApiCall = false;
  NotificationsService.error('Registration failed. ' + errorResponse.responseText);
};

const logIn = (credentials) => {
  state.performApiCall = true;
  state.logInInfo.email = credentials.email;
  state.logInInfo.password = credentials.password;
  let loginData = {
    grant_type: 'password',
    username: credentials.email,
    password: credentials.password
  };
  $.ajax({
    type: 'POST',
    url: '/Token',
    data: loginData
  }).done(function (data) {
    UserActions.logInSuccessful(data);
  }).fail((error) => {
    UserActions.logInFailed(error);
  });
};

const logInSuccessful = (serverResponse) => {
  state.performApiCall = false;
  state.isAuthenticated = true;
  state.accessToken = serverResponse.access_token;
  // Cache the access token in session storage.
  sessionStorage.setItem(tokenKey, serverResponse.access_token);
  NotificationsService.success('Successful log in', 'You can start use the app now');
};

const loginFailed = (errorResponse) => {
  state.performApiCall = false;
  let message = JSON.parse(errorResponse.responseText).error_description;
  NotificationsService.error('LogIn failed. ' + message);
};

const logout = () => {
  $.ajax({
    type: 'POST',
    url: '/api/Account/Logout'
  });

  state.isAuthenticated = false;
  state.accessToken = '';
  sessionStorage.removeItem(tokenKey);
};

const registeredCallback = (payload) => {
  let actionTypes = Constants.ActionTypes;

  switch (payload.action.type) {
    case actionTypes.registerUser:
      register(payload.action.data);
      storeWithEvents.emitChange();
      break;
    case actionTypes.registerSuccessful:
      registerSuccessful(payload.action.data);
      storeWithEvents.emitChange();
      break;
    case actionTypes.registerFailed:
      registerFailed(payload.action.data);
      storeWithEvents.emitChange();
      break;
    case actionTypes.logInUser:
      logIn(payload.action.data);
      storeWithEvents.emitChange();
      break;
    case actionTypes.loginSuccessful:
      logInSuccessful(payload.action.data);
      storeWithEvents.emitChange();
      break;
    case actionTypes.loginFailed:
      loginFailed(payload.action.data);
      storeWithEvents.emitChange();
      break;
    case actionTypes.logOut:
      logout();
      storeWithEvents.emitChange();
      break;

    default:
      // do nothing
  }
};

AppDispatcher.register(registeredCallback);

let UsersStore = {
  // Public methods
  addChangeListener: (callback) => {
    storeWithEvents.addChangeListener(callback);
  },

  removeChangeListener: (callback) => {
    storeWithEvents.removeChangeListener(callback);
  },

  getState: () => {
    return state;
  }
};

export default UsersStore;
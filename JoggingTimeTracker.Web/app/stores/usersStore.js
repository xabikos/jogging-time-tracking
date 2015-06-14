'use strict';

import AppDispatcher from '../appDispatcher';
import StoreWithEvents from './StoreWithEvents';
import UserActions from '../actions/userActions';
import Constants from '../constants';
import NotificationsService from '../services/notificationsService';

let changeEvent = 'USERS_CHANGE';

let storeWithEvents = new StoreWithEvents(changeEvent);

let state = {
  isRegistrating: false,
  isRegistered: false,
  isLogingIn: false,
  isAuthenticated: false,
  accessToken: '',
  user : {}
};

const register = (userInfo) => {
  state.isRegistrating = true;
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
  state.isRegistrating = false;
  state.isRegistered = true;
  NotificationsService.success('Successful registration', 'You successfully registered in the system. Use your credentials to log in now');
};

const registerFailed = (errorResponse) => {
  state.isRegistrating = false;
  NotificationsService.error('Registration failed. ' + errorResponse.responseText);
};

const logIn = (credentials) => {
  state.isLogingIn = true;
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
  state.isLogingIn = false;
  state.isAuthenticated = true;
  state.accessToken = serverResponse.access_token;
  // Cache the access token in session storage.
  sessionStorage.setItem('tokenKey', serverResponse.access_token);
  NotificationsService.success('Successful log in', 'You can start use the app now');
};

const loginFailed = (errorResponse) => {
  state.isLogingIn = false;
  let message = JSON.parse(errorResponse.responseText).error_description;
  NotificationsService.error('LogIn failed. ' + message);
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
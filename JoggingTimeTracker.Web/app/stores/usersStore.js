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
  isAuthenticated: false,
  user : {}
};

const register = (userInfo) => {
  console.log(userInfo);
  state.isRegistrating = true;
  $.ajax({
    type: 'POST',
    url: '/api/Account/Register',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(userInfo)
  }).done((data) => {
    console.log('success registration');
    UserActions.registerSuccessful(data);
  }).fail((error) => {
    console.log(error);
    NotificationsService.error('Registration failed. ' + error.responseText);
  });
};

const registerSuccessful = (serverResponse) => {
  state.isRegistrating = false;
  state.isRegistered = true;
  NotificationsService.success('Successful registration', 'You successfully registered in the system. Use your credentials to log in now');
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
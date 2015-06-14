'use strict';

import AppDispatcher from '../appDispatcher';
import StoreWithEvents from './StoreWithEvents';
import Actions from '../actions/userActions';
import Constants from '../constants';
import NotificationsService from '../services/notificationsService';

let changeEvent = 'USERS_CHANGE';

let storeWithEvents = new StoreWithEvents(changeEvent);

let state = {
  isAuthenticated: false,
  user : {}
};

const register = (userInfo) => {
  console.log(userInfo);
  $.ajax({
    type: 'POST',
    url: '/api/Account/Register',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(userInfo)
  }).done((data) => {
    console.log('success registration');
    NotificationsService.success('Successful registration', 'You successfully registered in the system. Use your credentials to log in now');
  }).fail((error) => console.log(error));
};

const registeredCallback = (payload) => {
  let actionTypes = Constants.ActionTypes;

  switch (payload.action.type) {
    case actionTypes.registerUser:
      register(payload.action.data);
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
'use strict';

import AppDispatcher from '../appDispatcher';
import StoreWithEvents from './StoreWithEvents';
import Actions from '../actions/userActions';
import Constants from '../constants';

var changeEvent = 'USERS_CHANGE';

let storeWithEvents = new StoreWithEvents(changeEvent);

const registeredCallback = (payload) => {
  let actionTypes = Constants.ActionTypes;

  switch (payload.action.type) {
    case actionTypes.registerUser:
      console.log(payload.action.data);
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
  }
};

export default UsersStore;
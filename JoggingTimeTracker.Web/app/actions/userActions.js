'use strict';

import Dispatcher from '../appDispatcher';
import Constants from '../constants';

let actionTypes = Constants.ActionTypes;

let UserActions = {
  register: (userInfo) => {
    Dispatcher.handleViewAction({
      type: actionTypes.registerUser,
      data: userInfo
    });
  },

  registerSuccessful: (serverResponse) => {
    Dispatcher.handleServerAction({
      type: actionTypes.registerSuccessful,
      data: serverResponse
    });
  },

  registerFailed: (errorResponse) => {
    Dispatcher.handleServerAction({
      type: actionTypes.registerFailed,
      data: errorResponse
    });
  }
};

export default UserActions;
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
  },

  logIn: (credentials) => {
    Dispatcher.handleServerAction({
      type: actionTypes.logInUser,
      data: credentials
    });
  },

  logInSuccessful: (serverResponse) => {
    Dispatcher.handleServerAction({
      type: actionTypes.loginSuccessful,
      data: serverResponse
    });
  },

  logInFailed: (errorResponse) => {
    Dispatcher.handleServerAction({
      type: actionTypes.loginFailed,
      data: errorResponse
    });
  },

  logOut: () => {
    Dispatcher.handleServerAction({
      type: actionTypes.logOut
    });
  }
};

export default UserActions;
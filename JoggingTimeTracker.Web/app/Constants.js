'use strict';

let Constants = {
  ActionTypes: {
    registerUser: 'REGISTER_USER',
    registerSuccessful: 'REGISTER_SUCCESSFUL',
    registerFailed: 'REGISTER_FAILED',
    logInUser: 'LOGIN_USER',
    loginSuccessful: 'LOGIN_SUCCESSFUL',
    loginFailed: 'LOGIN_FAILED',
    logOut: 'LOG_OUT',

    joggingSessionsInitialize: 'JOGGINGSESSIONS_INITIALIZE',
    joggingSessionSelect: 'JOGGINGSESSION_SELECT',
    joggingSessionAdd: 'JOGGINGSESSION_ADD'
  },

  PayloadSources: {
    serverAction: 'SERVER_ACTION',
    viewAction: 'VIEW_ACTION'
  }
};

export default Constants;
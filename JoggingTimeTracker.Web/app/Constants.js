﻿'use strict';

let Constants = {
  actionTypes: {
    registerUser: 'REGISTER_USER',
    registerSuccessful: 'REGISTER_SUCCESSFUL',
    registerFailed: 'REGISTER_FAILED',
    logInUser: 'LOGIN_USER',
    loginSuccessful: 'LOGIN_SUCCESSFUL',
    loginFailed: 'LOGIN_FAILED',
    logOut: 'LOG_OUT',

    joggingSessionsInitialize: 'JOGGINGSESSIONS_INITIALIZE',
    joggingSessionGetAll: 'JOGGINGSESSION_GETALL',
    joggingSessionGetAllSuccessful: 'JOGGINGSESSION_GETALL_SUCCESSFUL',
    joggingSessionGetAllFailed: 'JOGGINGSESSION_GETALL_FAILED',
    joggingSessionEdit: 'JOGGINGSESSION_EDIT',
    joggingSessionAdd: 'JOGGINGSESSION_ADD',
    joggingSessionAddSuccessful: 'JOGGINGSESSION_ADD_SUCCESSFUL',
    joggingSessionAddFaild: 'JOGGINGSESSION_ADD_FAILED',
    joggingSessionUpdate: 'JOGGINGSESSION_UPDATE',
    joggingSessionUpdateSuccessful: 'JOGGINGSESSION_UPDATE_SUCCESSFUL',
    joggingSessionUpdateFaild: 'JOGGINGSESSION_UPDATE_FAILED',
    joggingSessionDelete: 'JOGGINGSESSION_DELETE',
    joggingSessionFilter: 'JOGGINGSESSION_FILTER'
  },

  PayloadSources: {
    serverAction: 'SERVER_ACTION',
    viewAction: 'VIEW_ACTION'
  }
};

export default Constants;
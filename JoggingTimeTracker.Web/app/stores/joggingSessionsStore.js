'use strict';

import _ from 'lodash';

import AppDispatcher from '../appDispatcher';
import StoreWithEvents from './StoreWithEvents';
import JoggingSessionActions from '../actions/joggingSessionActions';
import Constants from '../constants';
import NotificationsService from '../services/notificationsService';

let changeEvent = 'SESSIONS_CHANGE';

let storeWithEvents = new StoreWithEvents(changeEvent);

let state = {
  performApiCall: false,
  editingSession: {},
  joggingSessions: []
};

const joggingSessionsInitialize = (initialSessions) => {
  state.joggingSessions = initialSessions;
};

const joggingSessionEdit = (sessionId) => {
  state.editingSession = _.find(state.joggingSessions, {'id': sessionId});
};

const addJoggingSession = (sessionInfo) => {
  state.performApiCall = true;
  state.editingSession.date = sessionInfo.date;
  state.editingSession.distance = sessionInfo.distance;
  state.editingSession.time = sessionInfo.time;

  let token = sessionStorage.getItem('accessToken');
  let headers = {};
  if (token) {
    headers.Authorization = 'Bearer ' + token;
  }

  $.ajax({
    type: 'POST',
    url: '/api/joggingSessions',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(sessionInfo),
    headers: headers
  }).done((data) => {
    console.log(data);
  }).fail((error) => {
    console.log(error);
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

const registeredCallback = (payload) => {
  let actionTypes = Constants.ActionTypes;
  
  switch (payload.action.type) {
    case actionTypes.joggingSessionsInitialize:
      joggingSessionsInitialize(payload.action.data);
      storeWithEvents.emitChange();
      break;
    case actionTypes.joggingSessionEdit:
      joggingSessionEdit(payload.action.data);
      storeWithEvents.emitChange();
      break;
    case actionTypes.joggingSessionAdd:
      addJoggingSession(payload.action.data);
      storeWithEvents.emitChange();
      break;
    
    default:
      // do nothing
  }
};

AppDispatcher.register(registeredCallback);

let JoggingSessionsStore = {
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

export default JoggingSessionsStore;
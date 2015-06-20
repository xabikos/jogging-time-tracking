'use strict';

import _ from 'lodash';

import AppDispatcher from '../appDispatcher';
import StoreWithEvents from './StoreWithEvents';
import JoggingSessionActions from '../actions/joggingSessionActions';
import {actionTypes} from '../constants';
import NotificationsService from '../services/notificationsService';

let changeEvent = 'SESSIONS_CHANGE';
let tokenKey = 'accessToken';

let storeWithEvents = new StoreWithEvents(changeEvent);

let state = {
  performApiCall: false,
  editingSession: {},
  joggingSessions: []
};

const joggingSessionsInitialize = (initialSessions) => {
  state.joggingSessions = initialSessions;
};

const joggingSessionsGetAll = () => {
  state.performApiCall = true;
  let token = sessionStorage.getItem(tokenKey);
  let headers = {};
  if (token) {
    headers.Authorization = 'Bearer ' + token;
  }

  $.ajax({
    type: 'GET',
    url: '/api/joggingSessions/',
    headers: headers
  }).done((data) => {
    JoggingSessionActions.getAllSuccessful(data);
  }).fail((errorResponse) => {
    JoggingSessionActions.getAllFailed(errorResponse);
  });  
};

const joggingSessionsGetAllSuccessful = (sessions) => {
  state.performApiCall = false;
  state.joggingSessions = sessions;
};

const joggingSessionsGetAllFailed = (errorResponse) => {
  state.performApiCall = false;
  NotificationsService.error('Get all jogging sessions failed. ' + errorResponse.responseText);
};

const joggingSessionEdit = (sessionId) => {
  state.editingSession = _.find(state.joggingSessions, {'id': sessionId});
};

const addJoggingSession = (sessionInfo) => {
  state.performApiCall = true;
  state.editingSession.date = sessionInfo.date;
  state.editingSession.distance = sessionInfo.distance;
  state.editingSession.time = sessionInfo.time;

  let token = sessionStorage.getItem(tokenKey);
  let headers = {};
  if (token) {
    headers.Authorization = 'Bearer ' + token;
  }
  delete sessionInfo.id;
  $.ajax({
    type: 'POST',
    url: '/api/joggingSessions',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(sessionInfo),
    headers: headers
  }).done((data) => {
    JoggingSessionActions.getAll();
    JoggingSessionActions.addSuccessful(data);
  }).fail((errorResponse) => {
    JoggingSessionActions.addFailed(errorResponse);
  });
};

const addJoggingSessionSuccessful = (sessionInfo) => {
  state.performApiCall = false;
  state.editingSession = {};
  NotificationsService.success('Successful session addition', 'You successfully added a new session.');
};

const addJoggingSessionFailed = (errorResponse) => {
  state.performApiCall = false;
  NotificationsService.error('Addition of new session failed. ' + errorResponse.responseText);
};

const updateJoggingSession = (sessionInfo) => {
  state.performApiCall = true;
  state.editingSession.id = sessionInfo.id;  
  state.editingSession.date = sessionInfo.date;
  state.editingSession.distance = sessionInfo.distance;
  state.editingSession.time = sessionInfo.time;

  let token = sessionStorage.getItem(tokenKey);
  let headers = {};
  if (token) {
    headers.Authorization = 'Bearer ' + token;
  }
  $.ajax({
    type: 'PUT',
    url: '/api/joggingSessions',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(sessionInfo),
    headers: headers
  }).done((data) => {
    JoggingSessionActions.getAll();
    JoggingSessionActions.updateSuccessful(data);
  }).fail((errorResponse) => {
    JoggingSessionActions.updateFailed(errorResponse);
  });
};

const updateJoggingSessionSuccessful = (sessionInfo) => {
  state.performApiCall = false;
  state.editingSession = {};
  NotificationsService.success('Successful update of session', 'You successfully updated the session.');
};

const updateJoggingSessionFailed = (errorResponse) => {
  state.performApiCall = false;
  NotificationsService.error('Update of session failed. ' + errorResponse.responseText);
};

const deleteJoggingSession = (sessionId) => {
  if (confirm('You are going to delete a Jogging Session. This action cannot be undone. Are you sure you want to proceed?')) {
    state.performApiCall = true;

    let token = sessionStorage.getItem(tokenKey);
    let headers = {};
    if (token) {
      headers.Authorization = 'Bearer ' + token;
    }

    $.ajax({
      type: 'DELETE',
      url: '/api/joggingSessions/' + sessionId,
      headers: headers
    }).done(() => {
      state.performApiCall = false;
      JoggingSessionActions.getAll();
    }).fail((errorResponse) => {
      state.performApiCall = false;
      NotificationsService.error('Deletion failed. ' + errorResponse.responseText);
    });  
  }
};

const registeredCallback = (payload) => {
  
  switch (payload.action.type) {
    case actionTypes.joggingSessionsInitialize:
      joggingSessionsInitialize(payload.action.data);
      storeWithEvents.emitChange();
      break;

    case actionTypes.joggingSessionGetAll:
      joggingSessionsGetAll();
      storeWithEvents.emitChange();
      break;
    case actionTypes.joggingSessionGetAllSuccessful:
      joggingSessionsGetAllSuccessful(payload.action.data);
      storeWithEvents.emitChange();
      break;
    case actionTypes.joggingSessionGetAllFailed:
      joggingSessionsGetAllFailed(payload.action.data);
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
    case actionTypes.joggingSessionAddSuccessful:
      addJoggingSessionSuccessful(payload.action.data);
      storeWithEvents.emitChange();
      break;
    case actionTypes.joggingSessionAddFaild:
      addJoggingSessionFailed(payload.action.data);
      storeWithEvents.emitChange();
      break;

    case actionTypes.joggingSessionUpdate:
      updateJoggingSession(payload.action.data);
      storeWithEvents.emitChange();
      break;
    case actionTypes.joggingSessionUpdateSuccessful:
      updateJoggingSessionSuccessful(payload.action.data);
      storeWithEvents.emitChange();
      break;
    case actionTypes.joggingSessionUpdateFaild:
      updateJoggingSessionFailed(payload.action.data);
      storeWithEvents.emitChange();
      break;

    case actionTypes.joggingSessionDelete:
      deleteJoggingSession(payload.action.data);
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
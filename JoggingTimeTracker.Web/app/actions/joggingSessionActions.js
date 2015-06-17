'use strict';

import Dispatcher from '../appDispatcher';
import Constants from '../constants';

let actionTypes = Constants.ActionTypes;

let JoggingSessionActions = {
	initializeStore: (joggingSessions) => {
		Dispatcher.handleViewAction({
			type: actionTypes.joggingSessionsInitialize,
			data: joggingSessions
		});
	},
	getAll: () => {
		Dispatcher.handleViewAction({
			type: actionTypes.joggingSessionGetAll
		});
  },
  getAllSuccessful: (joggingSessions) => {
    Dispatcher.handleViewAction({
      type: actionTypes.joggingSessionGetAllSuccessful,
      data: joggingSessions
    });
  },
  getAllFailed: (errorResponse) => {
    Dispatcher.handleViewAction({
      type: actionTypes.joggingSessionGetAllFailed,
      data: errorResponse
    });
  },
	edit: (joggingSessionId) => {
		Dispatcher.handleViewAction({
			type: actionTypes.joggingSessionEdit,
			data: joggingSessionId
		});
	},
	add: (joggingSessionInfo) => {
		Dispatcher.handleViewAction({
			type: actionTypes.joggingSessionAdd,
			data: joggingSessionInfo
		});
	},

	deleteSession: (joggingSessionId) => {
		Dispatcher.handleViewAction({
			type: actionTypes.joggingSessionDelete,
			data: joggingSessionId
		});
	}
};

export default JoggingSessionActions;
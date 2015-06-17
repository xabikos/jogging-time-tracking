'use strict';

import Dispatcher from '../appDispatcher';
import Constants from '../constants';

let actionTypes = Constants.ActionTypes;

let JoggingSessionActions = {
	initializeStore: (joggingSessions) => {
	  Dispatcher.handleServerAction({
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
    Dispatcher.handleServerAction({
      type: actionTypes.joggingSessionGetAllSuccessful,
      data: joggingSessions
    });
  },
  getAllFailed: (errorResponse) => {
    Dispatcher.handleServerAction({
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
  addSuccessful: (joggingSessionInfo) => {
    Dispatcher.handleServerAction({
      type: actionTypes.joggingSessionAddSuccessful,
      data: joggingSessionInfo
    });
  },
  addFailed: (errorResponse) => {
    Dispatcher.handleServerAction({
      type: actionTypes.joggingSessionAddFaild,
      data: errorResponse
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
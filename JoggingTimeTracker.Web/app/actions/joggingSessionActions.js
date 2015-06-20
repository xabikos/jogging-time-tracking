'use strict';

import Dispatcher from '../appDispatcher';
import {actionTypes} from '../constants';

let JoggingSessionActions = {
	initializeStore: (joggingSessions) => {
		Dispatcher.handleServerAction({
			type: actionTypes.joggingSessionsInitialize,
			data: joggingSessions
		});
	},
	
	edit: (joggingSessionId) => {
		Dispatcher.handleViewAction({
			type: actionTypes.joggingSessionEdit,
			data: joggingSessionId
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

	update: (joggingSessionInfo) => {
		Dispatcher.handleViewAction({
			type: actionTypes.joggingSessionUpdate,
			data: joggingSessionInfo
		});
	},
	updateSuccessful: (joggingSessionInfo) => {
		Dispatcher.handleServerAction({
			type: actionTypes.joggingSessionUpdateSuccessful,
			data: joggingSessionInfo
		});
	},
	updateFailed: (errorResponse) => {
		Dispatcher.handleServerAction({
			type: actionTypes.joggingSessionUpdateFaild,
			data: errorResponse
		});
	},

	deleteSession: (joggingSessionId) => {
		Dispatcher.handleViewAction({
			type: actionTypes.joggingSessionDelete,
			data: joggingSessionId
		});
	},
	
	filterSessions: (filter) => {
		Dispatcher.handleViewAction({
			type: actionTypes.joggingSessionFilter,
			data: filter
		});
	}
};

export default JoggingSessionActions;
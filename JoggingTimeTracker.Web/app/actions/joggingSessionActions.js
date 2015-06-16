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
  }
};

export default JoggingSessionActions;
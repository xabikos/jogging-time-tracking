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
  select: (joggingSessionId) => {
    Dispatcher.handleViewAction({
      type: actionTypes.joggingSessionSelect,
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
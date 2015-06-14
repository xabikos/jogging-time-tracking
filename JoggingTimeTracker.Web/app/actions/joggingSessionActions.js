'use strict';

import Dispatcher from '../appDispatcher';
import Constants from '../constants';

let actionTypes = Constants.ActionTypes;

let JoggingSessionActions = {
  add: (joggingSessionInfo) => {
    Dispatcher.handleViewAction({
      type: actionTypes.joggingSessionAdd,
      data: joggingSessionInfo
    });
  }
};

export default JoggingSessionActions;
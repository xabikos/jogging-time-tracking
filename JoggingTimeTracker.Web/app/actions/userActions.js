'use strict';

import Dispatcher from '../appDispatcher';
import Constants from '../constants';

let actionTypes = Constants.ActionTypes;

let UserActions = {
  register: (userInfo) => {
    Dispatcher.handleViewAction({
      type: actionTypes.registerUser,
      data: userInfo
    });
  }
  
};

export default UserActions;
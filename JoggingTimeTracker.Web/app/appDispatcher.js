'use strict';

import Constants from './constants';
import flux from 'flux';
import assign from 'object-assign';

let AppDispatcher = assign(new flux.Dispatcher(), {
  /**
  * @@param {object} action The details of the action, including the action's
  * type and additional data coming from the server.
  */
  handleServerAction(action) {
    let payload = {
      source: Constants.PayloadSources.serverAction,
      action: action
    };
    this.dispatch(payload);
  },

  /**
  * @@param {object} action The details of the action, including the action's
  * type and additional data coming from the view.
  */
  handleViewAction(action) {
    let payload = {
      source: Constants.PayloadSources.viewAction,
      action: action
    };
    this.dispatch(payload);
  }
});

export default AppDispatcher;
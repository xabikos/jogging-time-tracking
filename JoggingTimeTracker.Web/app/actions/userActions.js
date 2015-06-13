import alt from '../alt';

class UserActions
{
  register(userInfo) {
    this.dispatch(userInfo);
  }
}

export default alt.createActions(UserActions);
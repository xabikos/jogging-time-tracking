import alt from '../alt';

class UserActions
{
  register(userInfo) {
    console.log(userInfo);
    this.dispatch(userInfo);
  }
}

export default alt.createActions(UserActions);
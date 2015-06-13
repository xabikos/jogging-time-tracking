import alt from '../alt';
import UserActions from '../actions/userActions';

class UsersStore {
  constructor() {
    this.bindListeners({
      handleRegister: UserActions.REGISTER,
    });
  }

  handleRegister(userInfo) {
    console.log(userInfo);
  }

}

export default alt.createStore(UsersStore, 'UsersStore');
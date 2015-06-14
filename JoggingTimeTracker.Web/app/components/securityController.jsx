import UsersStore from '../stores/usersStore';
import RegistrationForm from './registrationForm';
import LogInFrom from './loginForm';

class SecurityController extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
      isAuthenticated: props.isAuthenticated
    };

		this.onChange = this.onChange.bind(this);
	}
	
	componentDidMount() {
		UsersStore.addChangeListener(this.onChange);
	}

	componentWillUnmount() {    
		UsersStore.removeChangeListener(this.onChange);
	}

	render() {
    let registerEmail = this.state.registerInfo ? this.state.registerInfo.email : '';
    let registerPassword = this.state.registerInfo ? this.state.registerInfo.password : '';
    let registerConfirmPassword = this.state.registerInfo ? this.state.registerInfo.confirmPassword : '';
    let logInEmail = this.state.logInInfo ? this.state.logInInfo.email : '';
    let logInpassword = this.state.logInInfo ? this.state.logInInfo.password : '';
    let markup = this.state.isAuthenticated ? 
		  (<div>
			  Authenticated
		  </div>) :      
			  (<div>          
					<RegistrationForm isRegistered={this.state.isRegistered} email={registerEmail} password={registerPassword} confirmPassword={registerConfirmPassword} />
					<LogInFrom email={logInEmail} password={logInpassword}/>
			  </div>);

    if(this.state.performApiCall){
      return (
        <div>
          <div className="isLoading">
            <div className="spinner"/>
          </div>
          {markup}
        </div>
      );
    }
    else {
      return markup;
    }		
	}

	onChange() {
		let storeState = UsersStore.getState();
		this.setState({
      isRegistered: storeState.isRegistered,
			isAuthenticated: storeState.isAuthenticated,
      performApiCall: storeState.performApiCall,
      registerInfo: storeState.registerInfo,
			logInInfo: storeState.logInInfo
		});
	}
}
 
export default SecurityController;
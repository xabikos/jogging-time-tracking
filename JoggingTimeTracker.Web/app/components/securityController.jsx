import UsersStore from '../stores/usersStore';
import RegistrationForm from './RegistrationForm';

class SecurityController extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {isAuthenticated: props.isAuthenticated};

		this.onChange = this.onChange.bind(this);
	}
	
	componentDidMount() {
    console.log('controller mount');
		UsersStore.addChangeListener(this.onChange);
	}

	componentWillUnmount() {
    console.log('controller unmount');
		UsersStore.removeChangeListener(this.onChange);
	}

	render() {
		return (			
			this.state.isAuthenticated ? 
				(<div>
					Authenticated
				</div>) :
        this.state.isRegistered ?
          (<div>
          Registered
          </div>) :
				  (<div>          
					    <RegistrationForm />          
				  </div>)
		);
	}

	onChange() {
		let storeState = UsersStore.getState();
		this.setState({
      isRegistered: storeState.isRegistered,
			isAuthenticated: storeState.isAuthenticated,
			user: storeState.user
		});
	}
}
 
export default SecurityController;
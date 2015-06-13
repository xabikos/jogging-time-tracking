import UsersStore from '../stores/usersStore';
import RegistrationForm from './RegistrationForm';

class SecurityController extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {isAuthenticated: props.isAuthenticated};

		this.onChange = this.onChange.bind(this);
	}
	
	componentDidMount() {
		UsersStore.addChangeListener(this.onChange);
	}

	componentWillUnmount() {
		UsersStore.removeChangeListener(this.onChange);
	}

	render() {
		return (			
			this.state.isAuthenticated ? 
				(<div>
					Authenticated
				</div>) :
				(<div>					
					<RegistrationForm />
				</div>)
		);
	}

	onChange() {
		let storeState = UsersStore.getState();
		this.setState({
			isAuthenticated: storeState.isAuthenticated,
			user: storeState.user
		});
	}
}
 
export default SecurityController;
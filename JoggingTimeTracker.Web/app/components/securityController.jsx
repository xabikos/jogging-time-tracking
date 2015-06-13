import RegistrationForm from './RegistrationForm';

class SecurityController extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {isAuthenticated: props.isAuthenticated};
	}
	
	componentDidMount(){
		//security.addChangeListener(this.onChange);
	}

	render() {
		return (			
			(<div>					
				<RegistrationForm />					
			</div>)
		);
	}

	onChange(status){
		this.setState({
			isAuthenticated: status.isAuthenticated,
			user: status.user
		});
	}
}
 
export default SecurityController;
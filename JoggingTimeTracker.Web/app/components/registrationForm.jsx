import ReactBootstrap from 'react-bootstrap';

import UserActions from '../actions/userActions';
import UserStore from '../stores/usersStore';

class RegistrationForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			confirmPassword: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.register = this.register.bind(this);
	}

	componentDidMount() {
		console.log('form mount');
	}

	componentWillUnmount() {
		console.log('form unmount');
	}

	handleChange(e) {
		switch (e.target.id) {			
			case 'registrationEmail':
				this.setState({email: e.target.value});
				break;
			case 'registrationPassword':
				this.setState({password: e.target.value});
				break;
			case 'registrationConfirmPassword':
				this.setState({confirmPassword: e.target.value});
				break;
		}
	}

	register() {
		UserActions.register(this.state);
	}

	render() {
		return(
			<ReactBootstrap.Panel header='Registration' bsStyle='primary'>
				<form className='form-horizontal'>          
					<ReactBootstrap.Input type='email' required id='registrationEmail' value={this.state.email} onChange={this.handleChange} label='Email' labelClassName='col-xs-2' wrapperClassName='col-xs-12' />
					<ReactBootstrap.Input type='password' id='registrationPassword' value={this.state.password} onChange={this.handleChange} label='Password' labelClassName='col-xs-2' wrapperClassName='col-xs-12' />
					<ReactBootstrap.Input type='password' id='registrationConfirmPassword' value={this.state.confirmPassword} onChange={this.handleChange} label='Confirm Password' labelClassName='col-xs-2' wrapperClassName='col-xs-12' />
					<ReactBootstrap.Button onClick={this.register} bsStyle='primary'>Register</ReactBootstrap.Button>
				</form>
			</ReactBootstrap.Panel>
		);
	}
}

export default RegistrationForm;
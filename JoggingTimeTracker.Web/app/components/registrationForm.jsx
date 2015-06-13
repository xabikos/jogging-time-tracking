import ReactBootstrap from 'react-bootstrap';

import UserActions from '../actions/userActions';
import UserStore from '../stores/usersStore';

class RegistrationForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {isAuthenticated: props.isAuthenticated};

		this.handleChange = this.handleChange.bind(this);
		this.register = this.register.bind(this);
	}

	handleChange(e) {
		switch (e.target.id) {
			case 'registrationUserName':
				this.setState({userName: e.target.value});
				break;
			case 'registrationEmail':
				this.setState({email: e.target.value});
				break;
			case 'registrationPassword':
				this.setState({
					password: e.target.value,
					confirmPassword: e.target.value
				});
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
					<ReactBootstrap.Input type='text' id='registrationUserName' value={this.state.userName} onChange={this.handleChange} label='Username' labelClassName='col-xs-2' wrapperClassName='col-xs-12' />
					<ReactBootstrap.Input type='email' id='registrationEmail' value={this.state.email} onChange={this.handleChange} label='Email' labelClassName='col-xs-2' wrapperClassName='col-xs-12' />
					<ReactBootstrap.Input type='password' id='registrationPassword' value={this.state.password} onChange={this.handleChange} label='Password' labelClassName='col-xs-2' wrapperClassName='col-xs-12' />
					<ReactBootstrap.Button onClick={this.register} bsStyle='primary'>Register</ReactBootstrap.Button>
				</form>
			</ReactBootstrap.Panel>
		);
	}
}

export default RegistrationForm;
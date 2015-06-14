import ReactBootstrap from 'react-bootstrap';

import UserActions from '../actions/userActions';

class LogInForm extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			email: props.email,
			password: props.password
		};

		this.handleChange = this.handleChange.bind(this);
		this.login = this.login.bind(this);
	}

	handleChange(e) {
		switch (e.target.id) {
			case 'loginEmail':
				this.setState({email: e.target.value});
				break;
			case 'loginPassword':
				this.setState({
					password: e.target.value
				});
			break;
		}
	}

	login() {
		UserActions.logIn(this.state);
	}

	render() {
		var Panel = ReactBootstrap.Panel;
		var Input = ReactBootstrap.Input;
		var Button = ReactBootstrap.Button;

		return(
			<Panel header='Login' bsStyle='primary'>
				<form className='form-horizontal'>
					<Input type='email' id='loginEmail' value={this.state.email} onChange={this.handleChange} label='Email' labelClassName='col-xs-2' wrapperClassName='col-xs-12' />
					<Input type='password' id='loginPassword' value={this.state.password} onChange={this.handleChange} label='Password' labelClassName='col-xs-2' wrapperClassName='col-xs-12' />
					<Button onClick={this.login} bsStyle='primary'>Login</Button>
				</form>
			</Panel>
		);
	}
}

export default LogInForm;
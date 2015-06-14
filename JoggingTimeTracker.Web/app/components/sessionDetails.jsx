import ReactBootstrap from 'react-bootstrap';

import JoggingSessionActions from '../actions/joggingSessionActions';

class SessionsDetails extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			id: props.Id,
			date: '',
			distance: '',
			time: ''
		};		 

		this.handleChange = this.handleChange.bind(this);
		this.save = this.save.bind(this);
	}

	handleChange(e) {
		switch (e.target.id) {			
			case 'date':
				this.setState({date: e.target.value});
				break;
			case 'distance':
				this.setState({distance: e.target.value});
				break;
			case 'time':
				this.setState({time: e.target.value});
				break;
		}
	}

	save() {
		if(!this.state.id) {
			JoggingSessionActions.add(this.state);
		}
	}

	render() {	  
		return (		
			<ReactBootstrap.Panel header='Session Details' bsStyle='primary'>
				<form className='form-horizontal'>          
					<ReactBootstrap.Input type='date' required id='date' value={this.state.date} onChange={this.handleChange} label='Date' labelClassName='col-xs-2' wrapperClassName='col-xs-12' />
					<ReactBootstrap.Input type='number' required id='distance' value={this.state.distance} onChange={this.handleChange} label='distance' labelClassName='col-xs-2' wrapperClassName='col-xs-12' />
					<ReactBootstrap.Input type='text' required id='time' value={this.state.time} onChange={this.handleChange} label='Time' labelClassName='col-xs-2' wrapperClassName='col-xs-12' />
					<ReactBootstrap.Button onClick={this.save} bsStyle='primary'>Save</ReactBootstrap.Button>
				</form>
			</ReactBootstrap.Panel>
		);
	}
}

export default SessionsDetails;
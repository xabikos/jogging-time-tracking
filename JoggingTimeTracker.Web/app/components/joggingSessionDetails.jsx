import ReactBootstrap from 'react-bootstrap';

import JoggingSessionActions from '../actions/joggingSessionActions';

class JoggingSessionDetails extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {			
      date: '',
			distance: '',
			time: ''
		};		 

		this.handleChange = this.handleChange.bind(this);
		this.save = this.save.bind(this);
		this.cancel = this.cancel.bind(this);
	}

  componentWillReceiveProps(nextProps) {
    this.setState({
        id: nextProps.editingData.id,
        date: nextProps.editingData.date,
			  distance: nextProps.editingData.distance,
			  time: nextProps.editingData.time
		  })
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
		if(this.state.id) {
			
		} else{
      JoggingSessionActions.add(this.state);
    }
	}

  cancel() {
    if(this.state.id === '') {
			this.setState({			
        date: '',
			  distance: '',
			  time: ''
		  });	
		} else {
      this.setState({			
			  id: '',
        date: '',
			  distance: '',
			  time: ''
		  });	
    }
  }

	render() {
    let isEditing = (this.state.id && this.state.id !== '') ? true : false;
    let header = isEditing ? 'Edit session with Id: ' + this.state.id : 'Add new session';
    let saveButtonText = isEditing ? 'Edit session' : 'Add new session';
    let cancelButtonText = isEditing ? 'Cancel' : 'Clear';
		
    return (		
			<ReactBootstrap.Panel header={header} bsStyle="primary">
				<form className='form-horizontal'>          
					<ReactBootstrap.Input type='date' required id='date' value={this.state.date} onChange={this.handleChange} label='Date' labelClassName='col-xs-2' wrapperClassName='col-xs-12' />
					<ReactBootstrap.Input type='number' required id='distance' value={this.state.distance} onChange={this.handleChange} label='distance' labelClassName='col-xs-2' wrapperClassName='col-xs-12' />
					<ReactBootstrap.Input type='text' required id='time' value={this.state.time} onChange={this.handleChange} label='Time' labelClassName='col-xs-2' wrapperClassName='col-xs-12' />
					<ReactBootstrap.ButtonToolbar>
            <ReactBootstrap.Button onClick={this.save} bsStyle='primary'>{saveButtonText}</ReactBootstrap.Button>
            <ReactBootstrap.Button onClick={this.cancel}>{cancelButtonText}</ReactBootstrap.Button>
          </ReactBootstrap.ButtonToolbar>
				</form>
			</ReactBootstrap.Panel>
		);
	}
}

export default JoggingSessionDetails;
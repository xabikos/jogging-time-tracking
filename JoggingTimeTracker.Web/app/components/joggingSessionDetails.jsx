import ReactBootstrap from 'react-bootstrap';
import moment from 'moment';

import NumberInput from './numberInput';
import JoggingSessionActions from '../actions/joggingSessionActions';

class JoggingSessionDetails extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {			
			date: '',
			distance: '',
			timeInTicks: ''
		};		 

		this.handleDateChange = this.handleDateChange.bind(this);
		this.handleDistanceChange = this.handleDistanceChange.bind(this);
		this.handleTimeChange = this.handleTimeChange.bind(this);
		this.save = this.save.bind(this);
		this.cancel = this.cancel.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
				id: nextProps.id,
				date: moment(nextProps.date).format('YYYY-MM-DD'),
				distance: nextProps.distance,
				timeInTicks: nextProps.timeInTicks
			})
	}

	handleDateChange(e) {
		this.setState({date: e.target.value});		
	}

	handleDistanceChange(val) {
		this.setState({distance: val});
	}

	handleTimeChange(val) {
		this.setState({timeInTicks: val * 600000000})
	}

	save() {
		if(this.state.id) {
			JoggingSessionActions.update(this.state);
		} else{
			JoggingSessionActions.add(this.state);
		}
	}

	cancel() {
		if(this.state.id === '') {
			this.setState({			
				date: '',
				distance: '',
				timeInTicks: ''
			});	
		} else {
			this.setState({			
				id: '',
				date: '',
				distance: '',
				timeInTicks: ''
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
					<ReactBootstrap.Input type='date' required id='date' value={this.state.date} onChange={this.handleDateChange} label='Date' labelClassName='col-xs-2' wrapperClassName='col-xs-12' />
					<div className="form-group">
						<label className="control-label col-xs-2">
							<span>Distance (in meters)</span>
						</label>
						<div className="col-xs-12">
							<NumberInput ref="distance" 
														value={this.state.distance}
														onValueChange={this.handleDistanceChange}
														min={0}
														name="distance"
														placeholder="The distance in meters" />
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-2">
							<span>Time in minutes</span>
						</label>
						<div className="col-xs-12">							
							<NumberInput ref="distance" 
														value={this.state.timeInTicks / 600000000}
														onValueChange={this.handleTimeChange}
														min={0}
														name="time"
														placeholder="The time in minutes" />
						</div>
					</div>
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
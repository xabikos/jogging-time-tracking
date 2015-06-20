import ReactBootstrap from 'react-bootstrap';
import moment from 'moment';

import JoggingSessionActions from '../actions/joggingSessionActions';

class FilterControl extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			dateFrom: '',
			dateTo: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.filter = this.filter.bind(this);
		this.clearFilter = this.clearFilter.bind(this);
	}

	handleChange(e) {
		switch (e.target.id) {
			case 'dateFrom':
				this.setState({dateFrom: e.target.value});
				break;
			case 'dateTo':
				this.setState({
					dateTo: e.target.value
				});
			break;
		}
	}

	filter() {
		JoggingSessionActions.filterSessions(this.state);
	}

	clearFilter(){
		let emptyState = {
			dateFrom: '',
			dateTo: ''
		};
		this.setState(emptyState);
		JoggingSessionActions.filterSessions(emptyState);
	}

	render() {
		var Panel = ReactBootstrap.Panel;
		var Input = ReactBootstrap.Input;
		var Button = ReactBootstrap.Button;

		return(
			<ReactBootstrap.Panel header="Filter sessions" bsStyle="primary">
				<form className='form-horizontal'>
					<ReactBootstrap.Input type='date' id='dateFrom' value={this.state.dateFrom} onChange={this.handleChange} label='From' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
					<ReactBootstrap.Input type='date' id='dateTo' value={this.state.dateTo} onChange={this.handleChange} label='To' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
					<ReactBootstrap.ButtonToolbar>
						<Button onClick={this.filter} bsStyle='primary'>Filter</Button>
						<Button onClick={this.clearFilter} >Clear Filter</Button>
					</ReactBootstrap.ButtonToolbar>
				</form>
			</ReactBootstrap.Panel>
		);
	}
}

export default FilterControl;
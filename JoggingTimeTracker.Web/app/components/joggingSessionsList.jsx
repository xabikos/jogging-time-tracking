﻿import ReactBootstrap from 'react-bootstrap';
import Griddle from 'griddle-react';
import moment from 'moment';

import JoggingSessionActions from '../actions/joggingSessionActions';
import FilterControl from './filterControl';
import ReportControl from './reportControl';

class DateColumn extends React.Component {
	constructor(props) {
		super(props);   
	}
	render() {    
		return <span>{moment(this.props.rowData.date).format('YYYY-MM-DD')}</span>;
	}
};

class AverageSpeed extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let averageSpeed = (this.props.rowData.distance /1000) / (this.props.rowData.timeInTicks / 36000000000);
		return <span>{averageSpeed}</span>;
	}
};

class EditButton extends React.Component {
	constructor(props) {
		super(props);

		this.edit = this.edit.bind(this);
	}

	edit(sessionId) {
		JoggingSessionActions.edit(sessionId)
	}

	render() {
		return <ReactBootstrap.Button onClick={this.edit.bind(null, this.props.rowData.id)} bsStyle='primary' bsSize='small'>Edit</ReactBootstrap.Button>
	}
};

class DeleteButton extends React.Component {
	constructor(props) {
		super(props);

		this.deleteSession = this.deleteSession.bind(this);
	}

	deleteSession(sessionId) {
		JoggingSessionActions.deleteSession(sessionId)
	}

	render() {
		return <ReactBootstrap.Button onClick={this.deleteSession.bind(null, this.props.rowData.id)} bsStyle='warning' bsSize='small'>Delete</ReactBootstrap.Button>
	}
};

let columns = ["id", "date", "distance", "time", "speed", "edit", "delete"];
let customColumnMetadata = [
	{
		order: 1,
		columnName: "id",
		displayName: "Id"
	},
	{
		order: 2,
		columnName: "date",
		displayName: "Date",
		customComponent: DateColumn
	},
	{
		order: 3,
		columnName: "distance",
		displayName: "Distance"    
	},
	{
		order: 4,
		columnName: "time",
		displayName: "Time"
	},
	{
		order: 5,
		columnName: "speed",
		displayName: "Speed (km/h)",
		customComponent: AverageSpeed
	},
	{
		order: 6,
		columnName: "edit",
		displayName: "Edit",
		customComponent: EditButton
	},
	{
		order: 7,
		columnName: "delete",
		displayName: "Delete",
		customComponent: DeleteButton
	}
];


class JoggingSessionsList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {    
		let Row = ReactBootstrap.Row;
		let Col = ReactBootstrap.Col;

		return (		
			<div>
				<Row>
					<Griddle results={this.props.joggingSessions} columnMetadata={customColumnMetadata} columns={columns} />
				</Row>
				<Row>
					<Col xs={12} md={4}>
						<FilterControl />
					</Col>
					<Col xs={12} md={8}>
						<ReportControl />
					</Col>
				</Row>
			</div>
		);
	}
}

export default JoggingSessionsList;
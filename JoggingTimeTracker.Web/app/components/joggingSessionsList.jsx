﻿import ReactBootstrap from 'react-bootstrap';
import Griddle from 'griddle-react';

import JoggingSessionActions from '../actions/joggingSessionActions';

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

let columns = ["id", "date", "distance", "time", "edit"];
let customColumnMetadata = [
  {
    order: 1,
    columnName: "id",
    displayName: "Id"
  },
  {
    order: 2,
    columnName: "date",
    displayName: "Date"    
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
    columnName: "edit",
    displayName: "Edit",
    visible: true,
    customComponent: EditButton
  }
];


class JoggingSessionsList extends React.Component {

	constructor(props) {
		super(props);
	}

  render() {    
		return (		
			<div>
				<Griddle results={this.props.joggingSessions} columnMetadata={customColumnMetadata} columns={columns} />
			</div>
		);
	}
}

export default JoggingSessionsList;
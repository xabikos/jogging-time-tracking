import ReactBootstrap from 'react-bootstrap';
import Griddle from 'griddle-react';

import JoggingSessionActions from '../actions/joggingSessionActions';

class JoggingSessionsList extends React.Component {

	constructor(props) {
		super(props);

    this.hadnleRowClick = this.handleRowClick.bind(this);
	}

  handleRowClick(row){
    JoggingSessionActions.select(row.props.data.id)    
  }

	render() {	
		let columns = ["id", "date", "distance", "time"];
		return (		
			<div>
				<Griddle results={this.props.joggingSessions} columns={columns} onRowClick={this.handleRowClick} />
			</div>
		);
	}
}

export default JoggingSessionsList;
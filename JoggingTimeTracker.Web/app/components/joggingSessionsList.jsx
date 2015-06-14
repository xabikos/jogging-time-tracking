import ReactBootstrap from 'react-bootstrap';
import Griddle from 'griddle-react';

class JoggingSessionsList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {			
		};
	}

	render() {	
		let columns = ["Id", "Date", "Distance", "Time"];
		return (		
			<div>
				<Griddle results={this.props.joggingSessions} columns={columns} />
			</div>
		);
	}
}

export default JoggingSessionsList;
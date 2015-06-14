import ReactBootstrap from 'react-bootstrap';
import Griddle from 'griddle-react';

class JoggingSessionsList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {			
		};
	}

	render() {
		let Grid = ReactBootstrap.Grid;
		let Row = ReactBootstrap.Row;
		let Col = ReactBootstrap.Col;
	

		return (		
			<div>
				<Griddle results={this.props.joggingSessions} />
			</div>
		);
	}
}

export default JoggingSessionsList;
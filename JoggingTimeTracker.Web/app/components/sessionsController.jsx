import ReactBootstrap from 'react-bootstrap';

import JoggingSessionsStore from '../stores/joggingSessionsStore';
import JoggingSessionsList from './joggingSessionsList';
import SessionDetails from './sessionDetails';

class SessionsController extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			
		};

		this.onChange = this.onChange.bind(this);
	}
	
	componentDidMount() {
		JoggingSessionsStore.addChangeListener(this.onChange);
	}

	componentWillUnmount() {    
		JoggingSessionsStore.removeChangeListener(this.onChange);
	}

	render() {
		let Grid = ReactBootstrap.Grid;
		let Row = ReactBootstrap.Row;
		let Col = ReactBootstrap.Col;

		return (
			<Grid fluid={false}>
					<Row>
						<Col xs={12} md={9}>
							<JoggingSessionsList joggingSessions={this.props.joggingSessions} />
						</Col>					
						<Col xs={12} md={3}>
							<SessionDetails />
						</Col>
					</Row>
			</Grid>			
		);    		
	}

	onChange() {
		this.setState({      
		});
	}
}
 
export default SessionsController;
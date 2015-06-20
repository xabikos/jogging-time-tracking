import ReactBootstrap from 'react-bootstrap';

import JoggingSessionsStore from '../stores/joggingSessionsStore';
import JoggingSessionsList from './joggingSessionsList';
import JoggingSessionDetails from './joggingSessionDetails';

class JoggingSessionsController extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		  joggingSessions: this.props.joggingSessions ? this.props.joggingSessions : []
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
							<JoggingSessionsList joggingSessions={this.state.joggingSessions} />
						</Col>					
						<Col xs={12} md={3}>
							<JoggingSessionDetails {...this.state.editingSession} />
						</Col>
					</Row>          
			</Grid>			
		);    		
	}

	onChange() {
		this.setState(JoggingSessionsStore.getState());
	}
}
 
export default JoggingSessionsController;
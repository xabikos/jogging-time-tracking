import ReactBootstrap from 'react-bootstrap';

import UsersStore from '../stores/usersStore';
import NavigationBar from './navigationBar';
import SecurityController from './securityController';
import SessionsController from './sessionsController';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isAuthenticated: props.isAuthenticated
		};

		this.onChange = this.onChange.bind(this);
	}
	
	componentDidMount() {
		UsersStore.addChangeListener(this.onChange);
	}

	componentWillUnmount() {    
		UsersStore.removeChangeListener(this.onChange);
	}

	render() {
		let Grid = ReactBootstrap.Grid;
		let Row = ReactBootstrap.Row;
		let Col = ReactBootstrap.Col;
	
		if(!this.state.isAuthenticated) {
			return (		
				<div>
					<NavigationBar />
					<Grid fluid={false} >
						<Row>
							<Col xs={12} md={9}>
								Jogging Time Tracking app
								<img className="img-responsive" src="/Content/images/jogging.jpg" alt="jogging activity"/>
							</Col>					
							<Col xs={12} md={3}>
								<SecurityController isAuthenticated={this.props.isAuthenticated} />
							</Col>
						</Row>
					</Grid>
				</div>
			);
		} else {
			return(
				<div> 
					<NavigationBar />
					<SessionsController joggingSessions={this.props.joggingSessions} />
				</div>
			);
		}
	}

	onChange() {
		this.setState({
			isAuthenticated: UsersStore.getState().isAuthenticated
		});
	}

}

export default App;
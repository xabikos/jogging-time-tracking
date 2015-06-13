import ReactBootstrap from 'react-bootstrap';

import NavigationBar from './navigationBar';
import SecurityController from './securityController';

class App extends React.Component {
  render() {
	let Grid = ReactBootstrap.Grid;
	let Row = ReactBootstrap.Row;
	let Col = ReactBootstrap.Col;
	

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
						<SecurityController isAuthenticated={false} />
					</Col>
				</Row>
			</Grid>
		</div>
	);
  }
}

export default App;
var ReactBootstrap = require('react-bootstrap');

var NavigationBar = require('./navigationBar');

class App extends React.Component {
  render() {
	var Grid = ReactBootstrap.Grid;
	var Row = ReactBootstrap.Row;
	var Col = ReactBootstrap.Col;
	
	return (
		<div>
			<NavigationBar />
			<Grid fluid={false} >
				<Row>
					<Col xs={12} md={9}>
						First	
					</Col>					
					<Col xs={12} md={3}>
						last
					</Col>
				</Row>
			</Grid>
		</div>
	);
  }
}

module.exports = App;
import ReactBootstrap from 'react-bootstrap';

import TimesList from './timesList';

class TimesController extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			
		};

		this.onChange = this.onChange.bind(this);
	}
	
	componentDidMount() {
		
	}

	componentWillUnmount() {    
		
	}

	render() {
		let Grid = ReactBootstrap.Grid;
		let Row = ReactBootstrap.Row;
		let Col = ReactBootstrap.Col;

		return (
			<Grid fluid={false}>
					<Row>
						<Col xs={12} md={9}>
							<TimesList />
						</Col>					
						<Col xs={12} md={3}>
							<div>Time details</div>
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
 
export default TimesController;
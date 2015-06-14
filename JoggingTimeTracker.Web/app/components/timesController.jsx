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
		return (
			<TimesList />
		);    		
	}

	onChange() {
		this.setState({      
		});
	}
}
 
export default TimesController;
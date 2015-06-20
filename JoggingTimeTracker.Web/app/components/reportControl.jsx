import ReactBootstrap from 'react-bootstrap';
import moment from 'moment';
import Griddle from 'griddle-react';

class ReportControl extends React.Component{
	
	constructor(props) {
		super(props);		
	}

	render() {
		return(
			<Griddle results={this.props.reportData} />
		);
	}
}

export default ReportControl;
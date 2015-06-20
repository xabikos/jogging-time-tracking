'use strict';

class NumberInput extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {			
			date: '',
			distance: '',
			time: ''
		};		 

		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleKeyDown(e){
		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
			 // Allow: Ctrl+A
			(e.keyCode === 65 && e.ctrlKey === true) ||
			 // Allow: Ctrl+C
			(e.keyCode === 67 && e.ctrlKey === true) ||
			 // Allow: Ctrl+X
			(e.keyCode === 88 && e.ctrlKey === true) ||
			 // Allow: home, end, left, right, up, down
			(e.keyCode >= 35 && e.keyCode <= 40)) {
				// let it happen, don't do anything
				return;
		}

		// Ensure that it is a number and stop the keypress
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}
	}

	handleChange(e){
		e.preventDefault();

		// as the input is a number type if a number has not typed the value is an empty string
		var newValue = e.target.value;

		var parsedNewValue = parseInt(newValue);
		if(this.props.min && this.props.min > parsedNewValue){
			// there is a case that the user sets the cursor in the first position then hits minus (-) and navigates away
			return;
		}
		if(this.props.max && this.props.max < parsedNewValue){
			return;
		}
		this.props.onValueChange(parsedNewValue);
	}

	render() {
		var placeholder = this.props.placeholder ? this.props.placeholder : "Type a number here";

		var classes = "form-control";

		return (
			<input
				id={this.props.id}
				type="number"
				value={this.props.value}
				name={this.props.name}
				className={classes}
				onKeyDown={this.handleKeyDown}
				onChange={this.handleChange}
				min={this.props.min}
				max={this.props.max}
				placeholder={placeholder}
				/>
		);
	}
}

export default NumberInput;
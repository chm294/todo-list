import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taskValue : '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = function(e) {
		this.setState({taskValue: e.target.value})
	}
	
	handleSubmit = function(e) {
		e.preventDefault();
		this.props.handleNewTask(this.state.taskValue.trim())
		document.getElementById("task-input").reset()
	}
	
	render() {
		console.log('state'+this.state.taskValue)
		return(
			<div>
				<form id="task-input" onSubmit={this.handleSubmit}>
					<input
						placeholder="Insert new task"
						autoFocus
						type="text" 
						name="task"
						value={this.state.value}
						onChange={this.handleChange}
						/> 
				</form>
			</div>
		)
	}
}

Input.propTypes = {
	handleNewTask: PropTypes.func.isRequired,
};

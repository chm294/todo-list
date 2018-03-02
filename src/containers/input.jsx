import React, {Component} from 'react';

export default class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taskValue : '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = function(e) {
		this.setState({taskValue: e.target.value})
	}
	
	handleSubmit = function(e) {
		e.preventDefault();
		document.getElementById("task-input").reset()
		this.props.handleNewTask(this.state.taskValue.trim())
		this.setState({taskValue : ''})
	}
	
	render() {
		return(
			<div>
				<form id="task-input" onSubmit={this.handleSubmit}>
					Insert New task
					<br></br>
					<input
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
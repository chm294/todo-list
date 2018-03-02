import React, {Component} from 'react';

export default class TodoEntry extends Component {
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete () {
		this.props.deleteTask(this.props.task)
	}

	render() {
		return(
			<div className="task" onClick={this.handleDelete}>
					{this.props.task}
			</div>
		)
	}
}
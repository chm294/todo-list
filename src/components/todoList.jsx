import React, {Component} from 'react';
import TodoEntry from './todoEntry'

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return(
			<div>
				{
					Object.keys(this.props.tasks).map((key) =>{
						console.log(key + this.props.tasks[key])
						if(this.props.tasks[key] === 'undone') {
							return <TodoEntry deleteTask={this.props.deleteTask} task={key}/>
						}
					})
				}
			</div>
		)
	}
}
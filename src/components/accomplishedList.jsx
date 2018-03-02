import React, {Component} from 'react';
import AccomplishedEntry from './accomplishedEntry'


export default class AccomplishedList extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render(){
		return(
			<div>
				<h2>{this.props.doneCount} {this.props.doneCount > 1 ? 'tasks' : 'task' } accomplished today </h2>
				{
					Object.keys(this.props.tasks).map((key) => {
						if(this.props.tasks[key] === 'done') {
							return <AccomplishedEntry task={key}/>
						}
					})
				}
			</div>
		)
	}
}
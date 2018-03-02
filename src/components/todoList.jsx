import React, {Component} from 'react';
import TodoEntry from './todoEntry';
import PropTypes from 'prop-types';


export default function TodoList (props) {
	return(
		<div>
			<h2>{props.undoneCount} Left To Do </h2>
			<div className="list">
				{
					Object.keys(props.tasks).map((key) =>{
						if(props.tasks[key] === 'undone') {
							return <TodoEntry deleteTask={props.deleteTask} task={key} key={key}/>
						}
					})
				}
			</div>
		</div>
	);
}

TodoList.propTypes = {
	undoneCount: PropTypes.number.isRequired,
	tasks: PropTypes.object.isRequired,
	deleteTask: PropTypes.func.isRequired,
};

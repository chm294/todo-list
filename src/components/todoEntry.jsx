import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default function TodoEntry (props) {
	return(
		<div className="entry task" onClick={() => props.deleteTask(props.task)}>
				{props.task}
		</div>
	)
}

TodoEntry.propTypes = {
	deleteTask: PropTypes.func.isRequired,
	task: PropTypes.string.isRequired
};

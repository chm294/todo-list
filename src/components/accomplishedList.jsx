import React, {Component} from 'react';
import AccomplishedEntry from './accomplishedEntry';
import PropTypes from 'prop-types';


export default function AccomplishedList (props) {
	return(
		<section>
			<h2>{props.doneCount} {props.doneCount > 1 ? 'tasks' : 'task' } accomplished today </h2>
				<ul className="list">
					{
						Object.keys(props.tasks).map((key) => {
							if(props.tasks[key] === 'done') {
								return <AccomplishedEntry key={key} task={key}/>
							}
						})
					}
				</ul>
		</section>
	);
}

AccomplishedList.propTypes = {
	doneCount: PropTypes.number.isRequired,
	tasks: PropTypes.object.isRequired,
};

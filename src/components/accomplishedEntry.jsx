import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function AccomplishedEntry (props) {
	return(
		<li className="entry">{props.task}</li>
	);
}

AccomplishedEntry.propTypes = {
	task: PropTypes.string.isRequired,
};

import React, {Component} from 'react';


export default class AccomplishedEntry extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<div>
			{this.props.task}
			</div>
		)
	}
}
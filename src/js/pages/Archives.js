import React from "react";

export default class Archives extends React.Component {
	render() {
		console.log(this.props);
		console.log(this.props.params);
		console.log(this.props.location.query);
		return (
			<h1>Archives {this.props.params.article }</h1>
		)
	}
}
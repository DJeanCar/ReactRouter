import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
  navigate() {
    this.props.history.push(null, "/");
  }

	render() {
    console.log(this.props.history.isActive("settings"));
		return (
        <div>
          <h1>My Page</h1>
          {this.props.children}
          <Link to="archives">archives</Link>
          <Link to="settings">settings</Link>
          <Link to="/"><button>featured</button></Link>
        </div>
			)
	}
}
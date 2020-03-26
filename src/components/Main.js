import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Main extends Component {
  componentDidMount() {
    console.log(this.props.location.state);
  }

  render() {
    const { email, name, dept, go } = this.props.location.state;
    return (
      <div>
        <div>MAIN</div>
        <p>email: {email}</p>
        <p>name: {name}</p>
        <p>dept: {dept}</p>
        <p>go: {go}</p>
      </div>
    );
  }
}

export default withRouter(Main);

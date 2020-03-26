import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Main extends Component {
  componentDidMount() {
    console.log(this.props.location.state);
  }

  state = {
    go: this.props.location.state.go
  };

  render() {
    const { email, name, dept, message } = this.props.location.state;
    const { go } = this.state;
    console.log(this.state.go);
    return (
      <div>
        <div>MAIN</div>
        <p>email: {email}</p>
        <p>name: {name}</p>
        <p>dept: {dept}</p>
        <p>go: {go.concat(message)}</p>
      </div>
    );
  }
}

export default withRouter(Main);

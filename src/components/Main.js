import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Main extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <div>MAIN</div>;
  }
}

export default withRouter(Main); //TODO: GET USER OBJ FROM PROPS

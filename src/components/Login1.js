import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { withRouter } from "react-router-dom";
import "./Login.css";

class Login1 extends Component {
  state = {
    email: ""
  };

  google = res => {
    this.getInfo(res);
  };

  getInfo = res => {
    const email = res.profileObj.email;
    console.log(res);
    this.setState({
      email
    });
    console.log(this.state.email);
    window.location.assign(
      window.location.href + `sign_up/${this.state.email}`
    );
  };

  responseFail = err => {
    console.error(err);
  };

  render() {
    return (
      <div className="container">
        <div className="logo_container">
          <h1 className="logo">Tutoring</h1>
          <h3 className="title">회의실 예약</h3>
        </div>
        <GoogleLogin
          clientId="143809299340-lbtoqef8grna1qkn1geopcjm82s6te30.apps.googleusercontent.com"
          buttonText="login"
          onSuccess={this.google}
          onFailure={this.responseFail}
        >
          구글로 로그인
        </GoogleLogin>
      </div>
    );
  }
}

export default withRouter(Login1);

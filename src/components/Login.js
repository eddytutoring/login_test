import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import qs from "qs";
import "./Login.css";

const CLIENT_ID =
  "143809299340-lbtoqef8grna1qkn1geopcjm82s6te30.apps.googleusercontent.com";
const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";

const queryStr = qs.stringify({
  client_id: CLIENT_ID,
  redirect_uri: "http://localhost:3000",
  response_type: "token",
  scope: "profile"
});
const loginUrl = AUTHORIZE_URI + "?" + queryStr;

class Login extends Component {
  state = {
    access_token: ""
  };

  async getAccessToken() {
    const { access_token } = await qs.parse(window.location.hash.substr(1));
    console.log(access_token);
    if (!access_token) {
      window.location.assign(loginUrl);
      return null;
    }
    this.setState({
      access_token
    });
  }

  render() {
    return (
      <div className="container">
        <div className="logo_container">
          <h1 className="logo">Tutoring</h1>
          <h3 className="title">회의실 예약</h3>
        </div>
        <Link
          to={{
            pathname: "/sign_up"
          }}
        >
          <button
            className="login_button"
            // onClick={() => {
            //   this.getAccessToken();
            // }}
          >
            구글 계정으로 로그인하기
          </button>
        </Link>
      </div>
    );
  }
}

export default withRouter(Login);

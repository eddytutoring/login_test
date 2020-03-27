import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Login.css";

class Login2 extends Component {
  state = {
    email: "",
    ID: ""
  };

  googleSDK = () => {
    window["googleSDKLoaded"] = () => {
      window["gapi"].load("auth2", () => {
        this.auth2 = window["gapi"].auth2.init({
          client_id:
            "143809299340-lbtoqef8grna1qkn1geopcjm82s6te30.apps.googleusercontent.com",
          cookiepolicy: "single_host_origin",
          scope: "profile"
        });
        this.prepareLoginButton();
      });
    };

    (function(d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "google-jssdk");
  };

  prepareLoginButton = () => {
    console.log(this.refs.googleLoginBtn);

    this.auth2.attachClickHandler(
      this.googleLoginBtn,
      {},
      googleUser => {
        let profile = googleUser.getBasicProfile();
        // console.log("Token || " + googleUser.getAuthResponse().id_token); //access_token
        let ID = profile.getId();
        let email = profile.getEmail();
        console.log("ID: " + ID);
        console.log("Email: " + email);
        //...
        this.setEmail(email, ID);
      },
      error => {
        alert(JSON.stringify(error, undefined, 2));
      }
    );
  };

  setEmail = (email, ID) => {
    this.setState({
      email: email,
      ID: ID
    });
    window.location.assign(
      window.location.href + `sign_up/${this.state.email}`
    );
  };

  componentDidMount() {
    this.googleSDK();
  }

  render() {
    return (
      <div className="container">
        <div className="logo_container">
          <h1 className="logo">Tutoring</h1>
          <h3 className="title">회의실 예약</h3>
        </div>
        <button
          className="login_button"
          ref={ref => {
            this.googleLoginBtn = ref;
          }}
        >
          구글 계정으로 로그인하기
        </button>
      </div>
    );
  }
}

export default withRouter(Login2);

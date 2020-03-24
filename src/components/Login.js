import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Login.css";

class Login extends Component {
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
          <button className="login_button">구글 계정으로 로그인하기</button>
        </Link>
      </div>
    );
  }
}

export default withRouter(Login);

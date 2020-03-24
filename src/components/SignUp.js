import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./SignUp.css";

class SignUp extends Component {
  render() {
    return (
      <div className="sign_up_container">
        <div className="logo_container">
          <h1 className="logo">Tutoring</h1>
          <h3 className="title">회의실 예약</h3>
          <h4 className="sign_up_des">추가 정보를 입력해 주세요</h4>
        </div>
        <div className="input_container">
          <span className="input_label">Email</span>
          <input
            className="email"
            name="email"
            placeholder={this.props.email}
            value
            onChange
          />

          <span className="input_label">이름</span>
          <input
            className="name"
            name="name"
            placeholder="영문이름_한글이름 형식으로 입력해 주세요"
            value
            onChange
          />

          <span className="input_label">소속 부서</span>
          <select
            className="dept"
            name="dept"
            onChange={e => {
              this.handleChange(e);
            }}
          >
            <option value="default">부서를 선택해주세요</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>

          <span className="input_label">소속 Go 팀</span>
          <div>
            <input className="go" name="go" value onChange />
            <button onClick>+</button>
          </div>
        </div>
        <Link
          to={{
            pathname: "/main",
            state: {
              //userObj
            }
          }}
        >
          <button className="login_button">구글 계정으로 로그인하기</button>
        </Link>
      </div>
    );
  }
}

export default withRouter(SignUp);

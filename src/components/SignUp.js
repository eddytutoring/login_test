import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./SignUp.css";

class SignUp extends Component {
  state = {
    inputs: ["input-0"],
    buttons: []
  };

  appendInput() {
    let newInput = `input-${this.state.inputs.length}`;
    let newButton = `button-${this.state.buttons.length}`;
    this.setState(prevState => ({
      inputs: prevState.inputs.concat([newInput]),
      buttons: prevState.buttons.concat([newButton])
    }));
  }

  remove(index) {
    console.log("button: " + (index + 1));
    this.setState(prevState => ({
      inputs: prevState.inputs.filter(input => input !== `input-${index + 1}`),
      buttons: prevState.buttons.filter(button => button !== `button-${index}`)
    }));
  }

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
            placeholder="kelly.a@mdcrew.co.kr" //TODO: {this.props.email}
            disabled
          />

          <span className="input_label">이름</span>
          <input
            className="name"
            name="name"
            placeholder="영문이름_한글이름 형식으로 입력해 주세요"
          />

          <span className="input_label">소속 부서</span>
          <select className="dept" name="dept">
            <option value="default">부서를 선택해주세요</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>

          <span className="input_label">소속 Go 팀</span>
          <div className="go_container">
            <div className="go_inputs">
              {this.state.inputs.map((input, index) => (
                <input className="go" name="go" id={index} key={input} />
              ))}
            </div>
            <div className="go_buttons">
              <button
                className="go_button"
                onClick={() => {
                  this.appendInput();
                }}
              >
                +
              </button>
              {this.state.buttons.map((button, index) => (
                <button
                  className="go_button"
                  key={button}
                  id={index}
                  onClick={() => this.remove(index)}
                >
                  -
                </button>
              ))}
              {/*TODO:remove BOX PROGRAMMATICALLY */}
            </div>
          </div>
        </div>
        <div className="button_container">
          <Link
            to={{
              pathname: "/main",
              state: {
                //userObj
              }
            }}
          >
            <button className="login_button" onClick>
              구글 계정으로 로그인하기
            </button>
            {/*TODO: SendUserInfo to Server*/}
            {/*
            TODO:
            IF, RECIEVE 200, THEN LINK TO MAIN
            */}
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);

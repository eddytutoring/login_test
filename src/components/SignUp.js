import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

class SignUp extends Component {
  state = {
    inputs: ["input-0"],
    buttons: [],
    email: this.props.match.params.email,
    name: "",
    dept: "",
    go: [],
    data: "",
    message: ""
  };

  appendInput(value) {
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

  setGo(index, newValue) {
    const updatedArray = [...this.state.go];
    updatedArray[index] = newValue;
    this.setState(prevState => ({
      go: updatedArray
    }));
  }

  deleteGo(index) {
    this.setState(prevState => ({
      go: prevState.go.slice(0, index - 1)
    }));
  }

  async sendUserInfo(email, name, dept, go) {
    const params = {
      email,
      name,
      dept,
      go
    };

    const res = await axios.post("", params);
    console.log(res.data);
    this.setState({
      data: res.data
    });
  }

  render() {
    const { email, name, dept, go } = this.state;
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
            placeholder={this.state.email}
            disabled
          />

          <span className="input_label">이름</span>
          <input
            className="name"
            name="name"
            placeholder="영문이름_한글이름 형식으로 입력해 주세요"
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
          />

          <span className="input_label">소속 부서</span>
          <select
            className="dept"
            name="dept"
            value={this.state.dept}
            ref={ref => {
              this.dept = ref;
            }}
            onChange={e => {
              this.setState({ dept: e.target.value });
              console.log(this.state.dept);
            }}
          >
            <option value="default">부서를 선택해주세요</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>

          <span className="input_label">소속 Go 팀</span>
          <div className="go_container">
            <div className="go_inputs">
              {this.state.inputs.map((input, index) => (
                <input
                  ref={ref => {
                    this.input = ref;
                  }}
                  className="go"
                  name="go"
                  id={index}
                  key={input}
                  onChange={e => {
                    this.setGo(index, e.target.value);
                    if (
                      this.state.name.indexOf("_") > -1 &&
                      this.dept.value !== "default"
                    ) {
                      this.login.disabled = false;
                      this.login.style = { backgroundColor: "#34bcff" };
                    }
                  }}
                />
              ))}
            </div>
            <div className="go_buttons">
              <button
                className="go_button"
                onClick={() => {
                  this.appendInput();
                  this.setState({
                    go: [...go, this.state.message]
                  });
                }}
              >
                +
              </button>
              {this.state.buttons.map((button, index) => (
                <button
                  className="go_button"
                  key={button}
                  id={index}
                  onClick={() => {
                    this.remove(index);
                    this.deleteGo(index);
                  }}
                >
                  -
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="button_container">
          <Link
            to={{
              pathname: "/main/",
              state: {
                email: this.state.email,
                name: this.state.name,
                dept: this.state.dept,
                go: this.state.go
              }
            }}
          >
            <button
              className="login_button"
              disabled
              ref={ref => {
                this.login = ref;
              }}
              style={{ backgroundColor: "#808080" }}
              onClick={() => {
                this.sendUserInfo(email, name, dept, go);
              }}
            >
              확인
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);

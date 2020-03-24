import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Main from "./components/Main";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Login} />
      <Route path="/sign_up" component={SignUp} />
      <Route path="/main" component={Main} />
    </HashRouter>
  );
}

export default App;

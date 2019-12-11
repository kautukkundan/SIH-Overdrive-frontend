import React from "react";
import "./login.css";
import LoginBox from "./login-box";
import { Icon } from "semantic-ui-react";

const Login = () => {
  return (
    <div className="login-body">
      <div className="right">
        <div className="hero-image">
          <a href="https://www.freepik.com/free-photos-vectors/puzzle">
            <img
              src={process.env.PUBLIC_URL + "/hero-pic.png"}
              height="500px"
              title="Puzzle vector created by slidesgo - www.freepik.com"
              alt=""
            />
          </a>
        </div>
        <div className="app-title">SIH Overdrive <Icon name="dashboard"/></div>
      </div>
      <div className="left">
        <div className="title" style={{ fontSize: "150%" }}>
          SIH Discussions Made Simple 
        </div>
        <div className="login-box">
          <LoginBox />
        </div>
        <div className="footer">
          Made with <Icon name="heart"/>by{" "}
          <a href="https://github.com/GauravJain98">Gaurav Jain</a> &{" "}
          <a href="https://github.com/kautukkundan">Kautuk Kundan</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

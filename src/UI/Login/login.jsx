import React from "react";
import "./login.css";
import { Icon } from "semantic-ui-react";

import LoginBox from "./login-box";

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
        <div className="app-title">
          SIH Overdrive <Icon name="dashboard" />
        </div>
        <span style={{ color: "white", fontSize: "150%", lineHeight: "160%" }}>
          Team discussions Made Simpler
        </span>
      </div>
      <div className="left">
        <div className="title" style={{ fontSize: "150%" }}>
          IDEATE &nbsp;|&nbsp; SHARE &nbsp;|&nbsp; COLLABORATE
        </div>
        <div className="login-box">
          <div className="information">
            <h4>How it works?</h4>
            <p>1. Sign-up and create a team</p>
            <p>2. Invite Team Mates</p>
            <p>
              3. Collaborate over Problem statements, Create Notes, Share Ideas
            </p>
          </div>
          <LoginBox />
        </div>
        <div className="footer">
          Made with <Icon name="heart" />
          by <a href="https://github.com/GauravJain98">Gaurav Jain</a> &{" "}
          <a href="https://github.com/kautukkundan">Kautuk Kundan</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

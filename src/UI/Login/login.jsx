import React, { useEffect } from "react";
import "./login.css";

import { useHistory } from "react-router-dom";
import { isLoggedIn } from "../../services/authService";

import LoginBox from "./login-box";
import { Icon } from "semantic-ui-react";

import ReactGa from "react-ga";

const Login = () => {
  const history = useHistory();
  useEffect(() => {
    const loggedin = isLoggedIn();
    if (loggedin) {
      history.push("/");
    }
  }, [history]);

  useEffect(() => {
    ReactGa.pageview("/login");
  }, []);

  return (
    <div className="login-body">
      <div className="right">
        <div className="hero-image">
          <a href="https://www.freepik.com/free-photos-vectors/puzzle">
            <img
              className="hero"
              src={process.env.PUBLIC_URL + "/hero-pic.png"}
              title="Puzzle vector created by slidesgo - www.freepik.com"
              alt=""
            />
          </a>
        </div>
        <br />
        <div className="app-title">
          SIH Overdrive <Icon name="dashboard" />
        </div>
        <span style={{ color: "white", fontSize: "150%", lineHeight: "160%" }}>
          Team discussions Made Simpler
        </span>
      </div>
      <div className="left">
        <div className="title">
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
          <br />
          <br />
        </div>
        <div className="footer">
          Made with <Icon name="heart" />
          by <a href="https://twitter.com/gaurav_jain98">Gaurav Jain</a> &{" "}
          <a href="https://twitter.com/Kautukkundan">Kautuk Kundan</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

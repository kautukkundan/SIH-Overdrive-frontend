import React from "react";
import "./home.css";
import UserInfo from "./components/user-info";
import TeamInfo from "./components/team-info";
import { Button } from "semantic-ui-react";
import TeamMemberInfo from "./components/team-member-info";

const Home = () => {
  return (
    <div className="home-body">
      <div className="left"></div>
      <div className="right">
        <div className="top">
          <UserInfo />
          <br/>
          <TeamInfo />
          <TeamMemberInfo />
        </div>
        <div className="footer">
          <Button fluid inverted>+ Join New team</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

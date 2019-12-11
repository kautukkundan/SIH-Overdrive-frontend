import React from "react";
import "./home.css";
import UserInfo from "./components/user-info";
import TeamInfo from "./components/team-info";
import { Button } from "semantic-ui-react";
import TeamMemberInfo from "./components/team-member-info";
import FilterGroup from "./components/filter-group";
import ProblemStatementsTable from "./components/problem-statements-table";

const Home = () => {
  return (
    <div className="home-body">
      <div className="left">
        <FilterGroup />
        <br />
        <ProblemStatementsTable />
      </div>
      <div className="right">
        <div className="top">
          <UserInfo />
          <br />
          <TeamInfo />
          <TeamMemberInfo />
        </div>
        <div className="footer">
          <Button fluid inverted>
            + Join New team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

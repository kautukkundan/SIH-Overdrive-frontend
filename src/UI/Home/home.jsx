import React from "react";
import { Route } from "react-router-dom";

import "./home.css";
import UserInfo from "./components/user-info";
import TeamInfo from "./components/team-info";
import TeamMemberInfo from "./components/team-member-info";
import FilterGroup from "./components/filter-group";
import ProblemStatementsTable from "./components/problem-statements-table";
import ProblemStatementDetail from "../ProblemStatement/problem-statement-detail";
import JoinTeam from "./components/join-team";

const Home = () => {
  return (
    <div className="home-body">
      <div className="right">
        <div className="top">
          <TeamInfo />
          <TeamMemberInfo />
        </div>
        <div className="footer">
          <JoinTeam />
          <br />
          <UserInfo />
        </div>
      </div>

      <div className="left">
        <Route exact path="/">
          <FilterGroup />
          <br />
          <ProblemStatementsTable />
        </Route>

        <Route exact path="/problem/:id" component={ProblemStatementDetail} />
      </div>
    </div>
  );
};

export default Home;

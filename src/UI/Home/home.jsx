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
import Notifications from "../Notifications/notifications";
import { Icon } from "semantic-ui-react";

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

        <Route exact path="/notifications" component={Notifications} />
      </div>
    </div>
  );
};

export default Home;

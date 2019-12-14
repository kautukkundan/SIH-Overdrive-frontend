import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import "./home.css";
import UserInfo from "./components/user-info";
import TeamInfo from "./components/team-info";
import TeamMemberInfo from "./components/team-member-info";
import FilterGroup from "./components/filter-group";
import ProblemStatementsTable from "./components/problem-statements-table";
import ProblemStatementDetail from "../ProblemStatement/problem-statement-detail";
import JoinTeam from "./components/join-team";
import Notifications from "../Notifications/notifications";
import NotFound from "../NotFound/notfound";
import CreateTeam from "./components/create-team";
import { Button } from "semantic-ui-react";
import { isLoggedIn } from "../../services/authService";

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    const loggedin = isLoggedIn();
    if (!loggedin) {
      history.push("/login");
    }
  }, [history]);

  return (
    <div className="home-body">
      <div className="right">
        <div className="top">
          <TeamInfo />
          <TeamMemberInfo />
        </div>
        <div className="footer">
          <Button.Group fluid inverted size="small" widths="2">
            <CreateTeam />
            <JoinTeam />
          </Button.Group>
          <UserInfo />
        </div>
      </div>

      <div className="left">
        <Switch>
          <Route exact path="/">
            <FilterGroup />
            <br />
            <ProblemStatementsTable />
          </Route>

          <Route exact path="/problem/:id" component={ProblemStatementDetail} />

          <Route exact path="/notifications" component={Notifications} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default Home;

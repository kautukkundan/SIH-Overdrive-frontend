import React, { useEffect, useState } from "react";
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
import { Button, Dimmer, Loader } from "semantic-ui-react";
import { isLoggedIn } from "../../services/authService";
import { useStoreActions } from "easy-peasy";
import { fetchUserDetails } from "../../services/userService";
import swal from "sweetalert";

const Home = () => {
  const history = useHistory();
  const setToken = useStoreActions(action => action.user.setToken);
  const setUser = useStoreActions(action => action.user.setUser);

  const [loading, setLoading] = useState(true);

  const setUserDetails = async userToken => {
    const response = await fetchUserDetails(userToken);
    if (response.status === 200) {
      setUser(response.data);
      setLoading(false);
    } else if (response.status === 401) {
      swal(
        "Unauthorized",
        "you dont have permission to view this page",
        "error"
      );
    }
  };

  useEffect(() => {
    const userToken = isLoggedIn();

    if (!userToken) {
      history.push("/login");
    } else {
      setToken(userToken);
      setUserDetails(userToken);
    }
  }, [history]);

  return loading ? (
    <Dimmer active>
      <Loader size="large">Setting Up Workspace</Loader>
    </Dimmer>
  ) : (
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

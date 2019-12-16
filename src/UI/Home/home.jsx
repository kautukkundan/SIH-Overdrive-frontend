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
import { useStoreActions, useStoreState } from "easy-peasy";
import { fetchUserDetails } from "../../services/userService";
import swal from "sweetalert";
import { getNotifications } from "../../services/notificationService";
import { getTeams, getTeamMates } from "../../services/teamService";

const Home = () => {
  const history = useHistory();
  const setToken = useStoreActions(action => action.user.setToken);
  const setUser = useStoreActions(action => action.user.setUser);
  const setNotifications = useStoreActions(
    action => action.notifications.setNotifications
  );
  const setAllTeams = useStoreActions(action => action.team.setAllTeams);
  const setAllTeamMates = useStoreActions(
    action => action.team.setAllTeamMates
  );

  const currentTeam = useStoreState(state => state.team.current_team);

  const [loading, setLoading] = useState(false);

  const setUserDetails = async userToken => {
    const response = await fetchUserDetails(userToken);
    if (response.status === 200) {
      setUser(response.data);
    } else if (response.status === 401) {
      swal(
        "Unauthorized",
        "you dont have permission to view this page",
        "error"
      );
    }
  };

  const getAllNotifications = async teamId => {
    const response = await getNotifications(teamId);
    if (response.status === 200) {
      setNotifications(response.data);
    } else {
      swal("Error", "Unable to fetch Notifications", "error");
    }
  };

  const getAllTeams = async () => {
    const response = await getTeams();
    if (response.status === 200) {
      setAllTeams(response.data);
    } else {
      swal("Error", "Unable to fetch Teams", "error");
    }
  };

  const getAllTeamMates = async teamId => {
    const response = await getTeamMates(teamId);
    if (response.status === 200) {
      setAllTeamMates(response.data);
    } else {
      swal("Error", "Unable to fetch Teams", "error");
    }
  };

  useEffect(() => {
    const userToken = isLoggedIn();

    const dataFetcher = async () => {
      setLoading(true);
      await setToken(userToken);
      await setUserDetails(userToken);
      await getAllTeams();
      setLoading(false);
      // await getAllTeamMates(currentTeam);
      // await getAllNotifications(currentTeam);
    };

    if (!userToken) {
      history.push("/login");
    } else {
      dataFetcher();
    }
  }, [history]);

  return loading ? (
    <Dimmer active inverted>
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

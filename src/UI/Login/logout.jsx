import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../services/authService";
import { useStoreActions } from "easy-peasy";

import ReactGa from "react-ga";

const Logout = () => {
  const history = useHistory();

  const setToken = useStoreActions(action => action.user.setToken);
  const setUser = useStoreActions(action => action.user.setUser);
  const setAllTeams = useStoreActions(action => action.team.setAllTeams);
  const setCurrentTeam = useStoreActions(action => action.team.setCurrentTeam);
  const setNotifications = useStoreActions(
    action => action.notifications.setNotifications
  );
  const setAllDynamicProblems = useStoreActions(
    action => action.problems.setAllDynamicProblems
  );
  const setAllStaticProblems = useStoreActions(
    action => action.problems.setAllStaticProblems
  );
  const setComments = useStoreActions(action => action.comments.setComments);

  useEffect(() => {
    ReactGa.pageview("/logout");
  }, []);

  useEffect(() => {
    logout();
    setToken(null);
    setUser({
      user: { email: null, first_name: null, last_name: null, avatar: null }
    });
    setAllTeams(null);
    setCurrentTeam({
      id: null,
      name: null,
      key: null,
      team_mates: []
    });
    setAllDynamicProblems([]);
    setAllStaticProblems([]);
    setComments([]);
    setNotifications(null);
    history.push("/login");
    //eslint-disable-next-line
  }, []);

  return null;
};

export default Logout;

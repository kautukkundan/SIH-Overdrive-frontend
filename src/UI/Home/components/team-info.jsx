import React, { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { getTeamMates } from "../../../services/teamService";
import TeamMemberInfo from "./team-member-info";
import { getNotifications } from "../../../services/notificationService";

import { Dropdown, Loader, Dimmer } from "semantic-ui-react";
import { getDynamicProblems } from "../../../services/problemStatementService";

const TeamInfo = () => {
  const teams = useStoreState(state => state.team.all_teams);
  const setCurrentTeam = useStoreActions(action => action.team.setCurrentTeam);
  const setAllTeamMates = useStoreActions(
    action => action.team.setAllTeamMates
  );
  const setNotifications = useStoreActions(
    action => action.notifications.setNotifications
  );
  const setAllDynamicProblems = useStoreActions(
    action => action.problems.setAllDynamicProblems
  );
  const currentTeam = useStoreState(state => state.team.current_team);

  const [loading, setLoading] = useState(false);

  const changeTeam = async team => {
    setLoading(true);
    setCurrentTeam(team);

    const getAllTeamMates = async teamId => {
      const response = await getTeamMates(teamId);
      if (response.status === 200) {
        setAllTeamMates(response.data);
      } else {
        alert("Error", "Unable to fetch Teams", "error");
      }
    };
    const getAllNotifications = async teamId => {
      const response = await getNotifications(teamId);
      if (response.status === 200) {
        setNotifications(response.data);
      } else if (response.status === 401) {
        setNotifications([]);
      } else {
        alert("Error", "Unable to fetch Notifications", "error");
      }
    };

    const getAllDynamicProblems = async teamId => {
      const response = await getDynamicProblems(teamId);
      if (response.status === 200) {
        setAllDynamicProblems(response.data);
      } else {
        alert("Error", "Unable to fetch Problems", "error");
      }
    };

    await getAllTeamMates(team.id);
    await getAllNotifications(team.id);
    await getAllDynamicProblems(team.id);
    setLoading(false);
  };

  const options =
    teams &&
    teams.map(item => {
      return {
        key: item.team.id,
        value: item.team.id,
        text: item.team.name,
        content: item.team.name
      };
    });

  return (
    <React.Fragment>
      <Dimmer active={loading}>
        <Loader />
      </Dimmer>
      {teams ? (
        <React.Fragment>
          <div className="team-info info">
            <div className="team">
              <span style={{ opacity: 0.5 }}>Team </span>
              <Dropdown
                inline
                header="Select Team"
                options={options}
                defaultValue={options && options.slice(-1)[0].value}
                onChange={(event, data) => {
                  changeTeam(
                    teams.filter(item => item.team.id === data.value)[0].team
                  );
                }}
              />
              <br />
              <br />
              <span style={{ opacity: 0.5 }}>Team Code</span> {currentTeam.key}
            </div>
          </div>
          <TeamMemberInfo />
        </React.Fragment>
      ) : (
        <div className="team-info info">
          + Create or join a team to get started
        </div>
      )}
    </React.Fragment>
  );
};

export default TeamInfo;

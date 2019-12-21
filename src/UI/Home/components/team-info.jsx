import React, { useState } from "react";

import { Dropdown, Loader, Dimmer } from "semantic-ui-react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { getTeamMates } from "../../../services/teamService";

const TeamInfo = () => {
  const teams = useStoreState(state => state.team.all_teams);
  const setCurrentTeam = useStoreActions(action => action.team.setCurrentTeam);
  const setAllTeamMates = useStoreActions(
    action => action.team.setAllTeamMates
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
    await getAllTeamMates(team.id);
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
    </React.Fragment>
  );
};

export default TeamInfo;

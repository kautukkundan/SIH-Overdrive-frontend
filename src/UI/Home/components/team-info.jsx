import React from "react";

import { Dropdown } from "semantic-ui-react";
import { useStoreState, useStoreActions } from "easy-peasy";

const TeamInfo = () => {
  const teams = useStoreState(state => state.team.all_teams);
  const setCurrentTeam = useStoreActions(action => action.team.setCurrentTeam);
  const currentTeam = useStoreState(state => state.team.current_team);

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
    <div className="team-info info">
      <div className="team">
        <span style={{ opacity: 0.5 }}>Team </span>
        <Dropdown
          inline
          header="Select Team"
          options={options}
          defaultValue={options && options.slice(-1)[0].value}
          onChange={(event, data) => {
            setCurrentTeam(
              teams.filter(item => item.team.id === data.value)[0].team
            );
          }}
        />
        <br />
        <br />
        <span style={{ opacity: 0.5 }}>Team Code</span> {currentTeam.key}
      </div>
    </div>
  );
};

export default TeamInfo;

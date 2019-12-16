import React, { useEffect } from "react";

import { Label } from "semantic-ui-react";
import AddMember from "./add-member";
import LeaveTeam from "./leave-team";
import { useStoreState, useStoreActions } from "easy-peasy";
import { getTeamMates } from "../../../services/teamService";
import swal from "sweetalert";

const TeamMemberInfo = () => {
  const currentTeam = useStoreState(state => state.team.current_team);
  const setAllTeamMates = useStoreActions(
    action => action.team.setAllTeamMates
  );

  useEffect(() => {
    const getTeamMembers = async teamId => {
      const response = await getTeamMates(teamId);
      if (response.status === 200) {
        setAllTeamMates(response.data);
      } else {
        swal("Error", "Cannot Fetch Team Mates", "error");
      }
    };
    currentTeam.id && getTeamMembers(currentTeam.id);
  }, []);

  return (
    <div className="team-member-info">
      <p className="title">
        My Team Members <LeaveTeam />
      </p>

      {currentTeam.team_mates.map((item, index) => {
        return (
          <div className="team-member">
            <div className="id">{index + 1}.</div>
            <div>
              <div className="name">
                {item.team_member.user.first_name}{" "}
                {item.team_member.user.last_name}{" "}
                {item.leader ? (
                  <Label size="mini" color="yellow">
                    <span style={{ color: "black" }}>LEADER</span>
                  </Label>
                ) : null}
                {/* <Label size="mini" color="orange">
                  <span>12</span>
                </Label> */}
              </div>
              <div className="email">{item.team_member.user.email}</div>
            </div>
          </div>
        );
      })}

      <AddMember />
    </div>
  );
};

export default TeamMemberInfo;

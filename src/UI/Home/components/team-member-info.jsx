import React from "react";

import { Label } from "semantic-ui-react";
import AddMember from "./add-member";
import LeaveTeam from "./leave-team";
import { useStoreState } from "easy-peasy";

const TeamMemberInfo = () => {
  const currentTeam = useStoreState(state => state.team.current_team);

  return (
    <div className="team-member-info">
      <p className="title">
        My Team Members <LeaveTeam />
      </p>

      {currentTeam.team_mates.map((item, index) => {
        return (
          <div className="team-member" key={index}>
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

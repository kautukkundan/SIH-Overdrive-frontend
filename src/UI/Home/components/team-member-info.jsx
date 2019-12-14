import React from "react";

import { Label } from "semantic-ui-react";
import AddMember from "./add-member";
import LeaveTeam from "./leave-team";

const TeamMemberInfo = () => {
  return (
    <div className="team-member-info">
      <p className="title">
        My Team Members <LeaveTeam />
      </p>
      <div className="team-member">
        <div className="id">1.</div>
        <div>
          <div className="name">
            Gunnika Batra{" "}
            <Label size="mini" color="yellow">
              <span style={{ color: "black" }}>LEADER</span>
            </Label>
            <Label size="mini" color="orange">
              <span>12</span>
            </Label>
          </div>
          <div className="email">b.gunnika@gmail.com</div>
        </div>
      </div>

      <div className="team-member">
        <div className="id">2.</div>
        <div>
          <div className="name">
            Kautuk Kundan{" "}
            <Label size="mini" color="orange">
              <span>12</span>
            </Label>
          </div>
          <div className="email">kautukkundan@gmail.com</div>
        </div>
      </div>

      <div className="team-member">
        <div className="id">3.</div>
        <div>
          <div className="name">
            Bipin Lala{" "}
            <Label size="mini" color="orange">
              <span>12</span>
            </Label>
          </div>
          <div className="email">lala.bipin@gmail.com</div>
        </div>
      </div>

      <div className="team-member">
        <div className="id">4.</div>
        <div>
          <div className="name">
            Gaurav Jain{" "}
            <Label size="mini" color="orange">
              <span>12</span>
            </Label>
          </div>
          <div className="email">crazcuber@gmail.com</div>
        </div>
      </div>

      <div className="team-member">
        <div className="id">5.</div>
        <div>
          <div className="name">
            Aashita Arora{" "}
            <Label size="mini" color="orange">
              <span>12</span>
            </Label>
          </div>
          <div className="email">aasita.arora@gmail.com</div>
        </div>
      </div>

      <AddMember />
    </div>
  );
};

export default TeamMemberInfo;

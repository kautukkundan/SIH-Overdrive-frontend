import React from "react";
import UserInfo from "./user-info";
import { Label } from "semantic-ui-react";

const TeamMemberInfo = () => {
  return (
    <div className="team-member-info">
      <p className="title">My Team Members</p>
      <div className="team-member">
        <div className="id">1.</div>
        <div>
          <div className="name">
            Kautuk Kundan{" "}
            <Label size="mini" color="yellow">
              <span style={{ color: "black" }}>LEADER</span>
            </Label>
          </div>
          <div className="email">kautukkundan@gmail.com</div>
        </div>
      </div>

      <div className="team-member">
        <div className="id">2.</div>
        <div>
          <div className="name">Kautuk Kundan</div>
          <div className="email">kautukkundan@gmail.com</div>
        </div>
      </div>

      <div className="team-member">
        <div className="id">3.</div>
        <div>
          <div className="name">Kautuk Kundan</div>
          <div className="email">kautukkundan@gmail.com</div>
        </div>
      </div>

      <div className="team-member">
        <div className="id">4.</div>
        <div>
          <div className="name">Kautuk Kundan</div>
          <div className="email">kautukkundan@gmail.com</div>
        </div>
      </div>

      <div className="team-member">
        <div className="id">5.</div>
        <div>
          <div className="name">Kautuk Kundan</div>
          <div className="email">kautukkundan@gmail.com</div>
        </div>
      </div>

      <div className="team-member">
        <div className="id">+</div>
        <div>
          <div className="name">Add Member</div>
          <div className="email">Invite a Member through email</div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberInfo;

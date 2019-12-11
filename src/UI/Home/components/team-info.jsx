import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  {
    key: "Winners",
    text: "Winners",
    value: "Winners",
    content: "Winners"
  },
  {
    key: "Champions",
    text: "Champions",
    value: "Champions",
    content: "Champions"
  },
  {
    key: "Superstars",
    text: "Superstars",
    value: "Superstars",
    content: "Superstars"
  }
];

const TeamInfo = () => {
  return (
    <div className="team-info info">
      <div className="team">
        <span style={{ opacity: 0.5 }}>Team </span>
        <Dropdown
          inline
          header="Select Team"
          options={options}
          defaultValue={options[0].value}
        />
        <br />
        <br />
        <span style={{ opacity: 0.5 }}>Team Code</span> ZXP0AM
      </div>
    </div>
  );
};

export default TeamInfo;

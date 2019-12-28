import React from "react";
import { Dropdown } from "semantic-ui-react";

const progressOptions = [
  {
    key: "Selected",
    text: "Selected",
    value: "Selected"
  },
  {
    key: "In-Progress",
    text: "In-Progress",
    value: "In-Progress"
  },
  {
    key: "Rejected",
    text: "Rejected",
    value: "Rejected"
  }
];

const StatusElement = () => {
  return (
    <div className="status-element">
      <div className="top">
        <strong>Status</strong>
        <div className="read-unread">
          <input type="checkbox" />
          <label> Read</label>
        </div>
      </div>
      <br />
      <div className="progress">
        <Dropdown
          placeholder="Mark Progress"
          fluid
          selection
          options={progressOptions}
        />
      </div>
    </div>
  );
};

export default StatusElement;

import React from "react";

import { Button, Icon } from "semantic-ui-react";

const Notification = props => {
  return (
    <div className="notification">
      <div className="icon">
        <Icon
          name={`sign-${props.type}`}
          color={props.type === "in" ? "orange" : "green"}
          size="big"
        />
      </div>
      <div className="info">
        <span className="name">{props.name}</span>
        <span className="email">{props.email}</span>
        <div className="message">{props.message}</div>
      </div>
      <div className="button">
        <Button positive>Accept</Button>
        <Button negative>Reject</Button>
      </div>
    </div>
  );
};

export default Notification;

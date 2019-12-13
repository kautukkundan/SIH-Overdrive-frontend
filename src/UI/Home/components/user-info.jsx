import React from "react";
import { Icon, Popup, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const UserInfo = () => {
  const history = useHistory();
  return (
    <Popup
      inverted
      trigger={
        <div className="info user-info">
          <div className="text">
            <div className="name">Kautuk Kundan</div>
            <div className="email">kautukkundan@gmail.com</div>
          </div>
          <div className="avatar">
            <Icon name="user" />
          </div>
        </div>
      }
      content={
        <div style={{ width: "250px", textAlign: "center" }}>
          <Button fluid size="small" color="teal" content="Sign-Out" />
          <br />
          <Button
            fluid
            size="small"
            color="blue"
            content="Notifications"
            onClick={() => {
              history.push("/notifications");
            }}
          />
        </div>
      }
      position="top center"
      on="click"
    />
  );
};

export default UserInfo;

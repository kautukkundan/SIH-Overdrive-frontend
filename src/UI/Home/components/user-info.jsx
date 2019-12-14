import React from "react";
import { useHistory } from "react-router-dom";

import { Popup, Button, Label, Icon } from "semantic-ui-react";

const UserInfo = () => {
  const history = useHistory();
  return (
    <Popup
      inverted
      trigger={
        <div className="info user-info">
          <div className="text">
            <div className="name">
              Kautuk Kundan &nbsp;&nbsp;
              <Label color="red" circular style={{ display: "" }}>
                <Icon name="bell" />7
              </Label>
            </div>
            <div className="email">kautukkundan@gmail.com</div>
          </div>
          <div className="avatar">
            <div
              className="avatar-image"
              style={{
                background:
                  "url('https://react.semantic-ui.com/images/avatar/small/laura.jpg')"
              }}
            ></div>
          </div>
        </div>
      }
      content={
        <div style={{ width: "250px", textAlign: "center" }}>
          <Button
            fluid
            size="small"
            color="teal"
            content="Sign-Out"
            onClick={() => {
              history.push("/logout");
            }}
          ></Button>
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

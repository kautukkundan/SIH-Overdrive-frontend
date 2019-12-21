import React from "react";
import { useHistory } from "react-router-dom";
import { useStoreState } from "easy-peasy";

import { Popup, Button, Label, Icon } from "semantic-ui-react";

const UserInfo = () => {
  const history = useHistory();

  const user = useStoreState(state => state.user);
  const notifications = useStoreState(state => state.notifications.all);

  return (
    <Popup
      inverted
      trigger={
        <div className="info user-info">
          <div className="text">
            <div className="name">
              {user.firstname} {user.lastname} &nbsp;&nbsp;
              {notifications && notifications.length > 0 ? (
                <Label color="red" circular style={{ display: "" }}>
                  <Icon name="bell" /> {notifications.length}
                </Label>
              ) : null}
            </div>
            <div className="email">{user.email}</div>
          </div>
          <div className="avatar">
            <div
              className="avatar-image"
              style={{
                background: `url('https://react.semantic-ui.com/images/avatar/small/${user.avatar}')`
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

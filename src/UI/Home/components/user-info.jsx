import React from "react";
import { useHistory } from "react-router-dom";
import { useStoreState } from "easy-peasy";

import { Popup, Button, Label, Icon } from "semantic-ui-react";

const UserInfo = () => {
  const history = useHistory();

  const user = useStoreState(state => state.user);
  const notifications = useStoreState(state => state.notifications.all);

  return (
    <div className="info user-info">
      <div className="text">
        <div className="name">
          {user.firstname} {user.lastname} &nbsp;&nbsp;
          {notifications && notifications.length > 0 ? (
            <Label
              color="red"
              circular
              style={{ display: "", cursor: "pointer" }}
              onClick={() => {
                history.push("/notifications");
              }}
            >
              <Icon name="bell" /> {notifications.length}
            </Label>
          ) : null}
        </div>
        <div className="email">{user.email}</div>
      </div>
      <Popup
        inverted
        hoverable
        trigger={
          <div className="avatar">
            <div
              className="avatar-image"
              style={{
                background: `url('https://react.semantic-ui.com/images/avatar/small/${user.avatar}')`
              }}
            ></div>
          </div>
        }
        content={
          <div style={{ width: "250px", textAlign: "center" }}>
            <Button
              fluid
              size="small"
              color="blue"
              content="Contact Developers"
              onClick={() => {
                window.open("mailto:sihoverdrive@gmail.com", "_blank");
              }}
            ></Button>
            <br />
            <Button
              fluid
              size="small"
              color="teal"
              content="Sign-Out"
              onClick={() => {
                history.push("/logout");
              }}
            ></Button>
          </div>
        }
        position="top center"
        // on="click"
      />
    </div>
  );
};

export default UserInfo;

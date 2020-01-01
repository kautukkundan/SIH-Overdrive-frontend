import React, { useEffect } from "react";
import "./notifications.css";

import Notification from "./components/notification";
import { useHistory } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import { Icon } from "semantic-ui-react";

import ReactGa from "react-ga";

const Notifications = () => {
  const history = useHistory();

  const allNotifications = useStoreState(state => state.notifications.all);
  const current_team = useStoreState(state => state.team.current_team);

  useEffect(() => {
    ReactGa.pageview("/notifications");
  }, []);

  return (
    <div className="notifications-body">
      <span className="disclaimer">
        Not optimized for mobile. Switch to a Laptop/Desktop for Best Experience
        <br />
        <br />
      </span>
      <div className="title">
        <Icon name="bell" /> Notifications for {current_team.name} |{" "}
        <span
          style={{ color: "#1f70bf", cursor: "pointer" }}
          onClick={() => history.push("/")}
        >
          Home
        </span>
      </div>
      <div className="all-notifications">
        {allNotifications ? (
          allNotifications.map((item, index) => {
            return (
              <Notification
                key={index}
                notification_id={item.id}
                name={
                  item.team_member.user.first_name +
                  " " +
                  item.team_member.user.last_name
                }
                email={item.team_member.user.email}
                message={"has requested to join your team."}
                type={"in"}
                avatar={item.team_member.avatar}
              />
            );
          })
        ) : (
          <p>
            <Icon name="ban" color="red" size="large" />
            Requests for this team can only be accessed by the Leader of this
            team
          </p>
        )}
        {allNotifications && allNotifications.length === 0
          ? "No New Requests"
          : null}
      </div>
    </div>
  );
};

export default Notifications;

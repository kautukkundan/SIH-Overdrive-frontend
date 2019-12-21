import React from "react";
import "./notifications.css";

import Notification from "./components/notification";
import { useHistory } from "react-router-dom";
import { useStoreState } from "easy-peasy";

const Notifications = () => {
  const history = useHistory();

  const allNotifications = useStoreState(state => state.notifications.all);
  const current_team = useStoreState(state => state.team.current_team);

  return (
    <div className="notifications-body">
      <div className="title">
        Notifications for {current_team.name} |{" "}
        <span
          style={{ color: "#1f70bf", cursor: "pointer" }}
          onClick={() => history.push("/")}
        >
          Home
        </span>
      </div>
      <div className="all-notifications">
        {allNotifications &&
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
          })}
      </div>
    </div>
  );
};

export default Notifications;

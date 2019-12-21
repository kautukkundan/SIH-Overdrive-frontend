import React from "react";
import "./notifications.css";

import Notification from "./components/notification";
import { useHistory } from "react-router-dom";

const Notifications = () => {
  const history = useHistory();

  return (
    <div className="notifications-body">
      <div className="title">
        My Notifications |{" "}
        <span
          style={{ color: "#1f70bf", cursor: "pointer" }}
          onClick={() => history.push("/")}
        >
          Home
        </span>
      </div>
      <div className="all-notifications">
        <Notification
          name={"Kautuk Kundan"}
          email={"kautukkundan@gmail.com"}
          message={"has requested to join your team."}
          type={"in"}
        />
        <Notification
          name={"Gaurav Jain"}
          email={"gaurav.jain@gmail.com"}
          message={"has requested to join your team."}
          type={"in"}
        />
        <Notification
          name={"Bipin Lala"}
          email={"lala.bipin@gmail.com"}
          message={"wants you to join their team"}
          type={"out"}
        />
        <Notification
          name={"Gunnika Batra"}
          email={"b.gunnika@gmail.com"}
          message={"wants you to join their team"}
          type={"out"}
        />
      </div>
    </div>
  );
};

export default Notifications;

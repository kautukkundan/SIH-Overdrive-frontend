import React from "react";
import "./notifications.css";
import Notification from "./components/notification";

const Notifications = () => {
  return (
    <div className="notifications-body">
      <div className="title">My Notifications</div>
      <div className="all-notifications">
        <Notification
          name={"Kautuk Kundan"}
          email={"kautukkundan@gmail.com"}
          message={"has requested to join your team."}
        />
        <Notification
          name={"Gaurav Jain"}
          email={"gaurav.jain@gmail.com"}
          message={"has requested to join your team."}
        />
        <Notification
          name={"Bipin Lala"}
          email={"lala.bipin@gmail.com"}
          message={"wants you to join their team"}
        />
        <Notification
          name={"Gunnika Batra"}
          email={"b.gunnika@gmail.com"}
          message={"wants you to join their team"}
        />
      </div>
    </div>
  );
};

export default Notifications;

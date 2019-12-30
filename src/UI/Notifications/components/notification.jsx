import React, { useState } from "react";

import { Button } from "semantic-ui-react";
import {
  acceptNotification,
  rejectNotification,
  getNotifications
} from "../../../services/notificationService";
import swal from "sweetalert";
import { getTeamMates } from "../../../services/teamService";
import { useStoreActions, useStoreState } from "easy-peasy";

const Notification = props => {
  const [loadingA, setLoadingA] = useState(false);
  const [loadingB, setLoadingB] = useState(false);

  const setAllTeamMates = useStoreActions(
    action => action.team.setAllTeamMates
  );
  const currentTeam = useStoreState(state => state.team.current_team);
  const setNotifications = useStoreActions(
    action => action.notifications.setNotifications
  );

  const getAllNotifications = async teamId => {
    const response = await getNotifications(teamId);
    if (response.status === 200) {
      setNotifications(response.data);
    } else if (response.status === 401) {
      setNotifications(null);
    } else {
      swal("Error", "Unable to fetch Notifications", "error");
    }
  };

  const getAllTeamMates = async teamId => {
    const response = await getTeamMates(teamId);
    if (response.status === 200) {
      setAllTeamMates(response.data);
    } else {
      alert("Error", "Unable to fetch Teams", "error");
    }
  };

  const acceptMember = async () => {
    setLoadingA(true);
    const response = await acceptNotification(props.notification_id);
    if (response.status === 200) {
      swal("Accepted", response.data, "success").then(() => {
        getAllTeamMates(currentTeam.id);
        getAllNotifications(currentTeam.id);
      });
    } else {
      swal("Oops!", "Something went wrong! please try again", "error");
    }
    setLoadingA(false);
  };

  const rejectMember = async () => {
    setLoadingB(true);
    await rejectNotification(props.notification_id);
    window.location.reload();
    setLoadingB(false);
  };

  return (
    <div className="notification">
      <div className="icon">
        {/* <Icon
          name={`sign-${props.type}`}
          color={props.type === "in" ? "orange" : "green"}
          size="big"
        /> */}
        <div
          className="avatar-image"
          style={{
            background: `url('https://react.semantic-ui.com/images/avatar/small/${props.avatar}')`
          }}
        ></div>
      </div>
      <div className="info">
        <span className="name">{props.name}</span>
        <span className="email">{props.email}</span>
        <div className="message">{props.message}</div>
      </div>
      <div className="button">
        <Button positive loading={loadingA} onClick={() => acceptMember()}>
          Accept
        </Button>
        <Button negative loading={loadingB} onClick={() => rejectMember()}>
          Reject
        </Button>
      </div>
    </div>
  );
};

export default Notification;

import React, { useState } from "react";

import { Button } from "semantic-ui-react";
import {
  acceptNotification,
  rejectNotification,
  getNotifications
} from "../../../services/notificationService";
import swal from "sweetalert";
import { useStoreState } from "easy-peasy";

const Notification = props => {
  const [loadingA, setLoadingA] = useState(false);
  const [loadingB, setLoadingB] = useState(false);

  const acceptMember = async () => {
    setLoadingA(true);
    const response = await acceptNotification(props.notification_id);
    if (response.status === 200) {
      swal("Accepted", response.data, "success").then(() => {
        window.location.reload();
      });
    } else {
      swal("Oops!", "Something went wrong! please try again", "error");
    }
    setLoadingA(false);
  };

  const rejectMember = async () => {
    setLoadingB(true);
    const response = await rejectNotification(props.notification_id);
    // window.location.reload();
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

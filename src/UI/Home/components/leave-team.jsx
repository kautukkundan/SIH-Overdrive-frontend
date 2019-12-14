import React from "react";
import { Icon, Popup } from "semantic-ui-react";
import swal from "sweetalert";

const LeaveTeam = () => {
  const handleExit = () => {
    swal({
      title: "Exit Team",
      text: "Are you sure you want to exit this team?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal("You have successfully Exited the team!", {
          icon: "success"
        });
      }
    });
  };
  return (
    <Popup
      content="Exit Team"
      trigger={
        <Icon
          style={{ cursor: "pointer" }}
          name="external square alternate"
          color="red"
          onClick={handleExit}
        />
      }
      popperModifiers={{
        preventOverflow: { boundariesElement: "window" }
      }}
      position="right center"
    ></Popup>
  );
};

export default LeaveTeam;

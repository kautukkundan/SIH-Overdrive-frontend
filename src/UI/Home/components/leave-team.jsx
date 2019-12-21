import React from "react";
import swal from "sweetalert";
import { useStoreState } from "easy-peasy";
import { leaveTeam } from "../../../services/teamService";

import { Icon, Popup } from "semantic-ui-react";

const LeaveTeam = () => {
  const currentTeam = useStoreState(state => state.team.current_team);

  const handleExit = () => {
    swal({
      title: "Exit Team",
      text: "Are you sure you want to exit this team?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(async willDelete => {
      if (willDelete) {
        await leaveTeam(currentTeam.id);
        swal("You have successfully Exited the team!", {
          icon: "success"
        }).then(() => {
          window.location.reload();
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

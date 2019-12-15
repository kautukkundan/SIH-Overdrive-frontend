import React, { useState } from "react";
import swal from "sweetalert";

import { Modal, Button, Header, Form, Icon } from "semantic-ui-react";
import { joinTeam } from "../../../services/teamService";

const JoinTeam = () => {
  const [teamCode, setTeamCode] = useState("");
  const [teamName, setTeamName] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const joinNewTeam = async (name, code) => {
    setLoading(true);
    const response = await joinTeam(name, code);
    if (response.status === 200) {
      swal("Request Sent", "The Team Leader has been Notified", "success");
    } else if (response.status === 404) {
      swal("Invalid Code!", "This team does not exist!", "error");
    } else {
      swal("Request Sent", "The Team Leader has been Notified", "success");
      setOpen(false);
    }
    setLoading(false);
    setOpen(false);
  };

  const handleSubmit = () => {
    if (teamCode.length !== 6) {
      swal(
        "Incorrect Team Code",
        "The Team Code must be 6 Digits Long",
        "error"
      );
    } else {
      joinNewTeam(teamName, teamCode);
    }
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      open={open}
      trigger={
        <Button inverted onClick={() => setOpen(true)}>
          <Icon name="group" />
          JOIN TEAM
        </Button>
      }
      closeIcon
    >
      <Header>Join New Team Using Access Code</Header>
      <Modal.Content>
        - You can be a part of multiple teams
        <br />
        - Obtain the 6 digit team code from the team you wish to join
        <br />
        <br />
        <Form>
          <input
            placeholder="Enter Team Name"
            onChange={e => setTeamName(e.target.value)}
          />
          <input
            placeholder="Enter Team Code - eg: QPWOER"
            onChange={e => setTeamCode(e.target.value)}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button positive onClick={handleSubmit} loading={loading}>
          Request to join team
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default JoinTeam;

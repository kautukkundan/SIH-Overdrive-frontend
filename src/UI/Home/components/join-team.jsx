import React, { useState } from "react";
import swal from "sweetalert";
import { joinTeam } from "../../../services/teamService";

import { Modal, Button, Header, Form, Icon } from "semantic-ui-react";

const JoinTeam = () => {
  const [teamCode, setTeamCode] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const joinNewTeam = async code => {
    setLoading(true);
    const response = await joinTeam(code);
    if (response.status === 200) {
      swal("Success", response.data, "success");
    } else if (response.status === 404) {
      swal("Invalid Code!", "This team does not exist!", "error");
    } else {
      swal("Oops!", "Something unexpected happened. Please retry", "warning");
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
      joinNewTeam(teamCode);
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
      className="small-modal"
    >
      <Header>Join New Team Using Access Code</Header>
      <Modal.Content>
        - You can be a part of multiple teams
        <br />
        - Obtain the 6 digit team code from the team you wish to join
        <br />
        <br />
        <Form onSubmit={handleSubmit}>
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

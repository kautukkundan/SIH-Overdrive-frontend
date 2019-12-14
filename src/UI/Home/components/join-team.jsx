import React, { useState } from "react";
import swal from "sweetalert";

import { Modal, Button, Header, Form } from "semantic-ui-react";

const JoinTeam = () => {
  const [teamCode, setTeamCode] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (teamCode.length !== 6) {
      swal(
        "Incorrect Team Code",
        "The Team Code must be 6 Digits Long",
        "error"
      );
    } else {
      swal("Request Sent", "The Team Leader has been Notified", "success");
      setOpen(false);
    }
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      open={open}
      trigger={
        <Button fluid inverted onClick={() => setOpen(true)}>
          + Join New team
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
            placeholder="Enter Team Code - eg: QPWOER"
            onChange={e => setTeamCode(e.target.value)}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button positive onClick={handleSubmit}>
          Request to join team
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default JoinTeam;

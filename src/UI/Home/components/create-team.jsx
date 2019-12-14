import React, { useState } from "react";
import swal from "sweetalert";

import { Modal, Button, Header, Form, Icon } from "semantic-ui-react";

const CreateTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (teamName.length !== 5) {
      swal(
        "Incorrect Team Name",
        "The Team Code must be atleast 5 Characters Long",
        "error"
      );
    } else {
      swal(
        "New Team Created",
        "Congrats! \nInvite More members to your team and start the discussions.",
        "success"
      );
      setOpen(false);
    }
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      open={open}
      trigger={
        <Button inverted onClick={() => setOpen(true)}>
          <Icon name="plus " />
          NEW TEAM
        </Button>
      }
      closeIcon
    >
      <Header>Create New Team</Header>
      <Modal.Content>
        - Enter Team Name
        <br />
        <br />
        <Form>
          <input
            placeholder="Enter Team Name - eg: Champs"
            onChange={e => setTeamName(e.target.value)}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button positive onClick={handleSubmit}>
          Create
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default CreateTeam;

import React, { useState } from "react";
import swal from "sweetalert";
import { createTeam } from "../../../services/teamService";
import ReactGa from "react-ga";

import { Modal, Button, Header, Form, Icon } from "semantic-ui-react";

const CreateTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const createNewTeam = async name => {
    setLoading(true);
    const response = await createTeam(name);
    if (response.status === 201) {
      swal(
        "New Team Created",
        "Congrats! \nInvite More members to your team and start the discussions.",
        "success"
      ).then(() => window.location.reload());
    } else {
      swal("Oops!", "Something went wrong, please try again later.", "error");
    }
    setLoading(false);
    setOpen(false);
  };

  const handleSubmit = () => {
    ReactGa.event({
      category: "button",
      action: "create team request"
    });
    if (teamName.length < 5) {
      swal(
        "Incorrect Team Name",
        "The Team Code must be atleast 5 Characters Long",
        "error"
      );
    } else {
      createNewTeam(teamName);
    }
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      open={open}
      trigger={
        <Button
          inverted
          onClick={() => {
            ReactGa.event({
              category: "modal",
              action: "new team modal"
            });
            setOpen(true);
          }}
        >
          <Icon name="plus" />
          NEW TEAM
        </Button>
      }
      closeIcon
      className="small-modal"
    >
      <Header>Create New Team</Header>
      <Modal.Content>
        - Enter Team Name (You cannot edit team name later)
        <br />
        <br />
        <Form onSubmit={handleSubmit}>
          <input
            placeholder="Enter Team Name - eg: Champs"
            onChange={e => setTeamName(e.target.value)}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button positive onClick={handleSubmit} loading={loading}>
          Create
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default CreateTeam;

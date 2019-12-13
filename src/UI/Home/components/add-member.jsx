import React, { useState } from "react";
import { Modal, Button, Header, Form, Icon } from "semantic-ui-react";
import swal from "sweetalert";

const AddMember = () => {
  const [memberEmail, setMemberEmail] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (memberEmail.length !== 6) {
      swal("Incorrect Email", "Please Enter a valid email", "error");
    } else {
      swal(
        "Request Sent",
        "The Person has been invited to join your team",
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
        <div className="team-member add-team" onClick={() => setOpen(true)}>
          <div className="id">+</div>
          <div>
            <div className="name">Add Member</div>
            <div className="email">Invite a Member through email</div>
          </div>
        </div>
      }
      closeIcon
    >
      <Header>Add Team Members</Header>
      <Modal.Content>
        - Invite a member to join your Team.
        <br />
        - The person will be notified via email.
        <br />
        <br />
        <Form>
          <input
            placeholder="Enter Email"
            onChange={e => setMemberEmail(e.target.value)}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button positive onClick={handleSubmit}>
          <Icon name="mail" />
          Send Invitation
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AddMember;

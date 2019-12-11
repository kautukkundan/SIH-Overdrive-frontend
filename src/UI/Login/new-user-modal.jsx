import React, { useEffect, useState } from "react";
import { Modal, Form, Button } from "semantic-ui-react";

const NewUserModal = props => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(props);
    setOpen(props.newUser);
  }, [props]);

  return (
    <Modal
      closeIcon
      trigger={
        <p
          style={{ color: "#1E88BE", cursor: "pointer" }}
          onClick={() => setOpen(true)}
        >
          New User?
        </p>
      }
      open={open}
      onClose={() => setOpen(false)}
    >
      <Modal.Header>Create Account</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <label>First Name</label>
              <input />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Password</label>
              <input type="password" />
            </Form.Field>
            <Form.Field>
              <label>Retype Password</label>
              <input type="password" />
            </Form.Field>
          </Form.Group>

          <Button type="submit" floated="right" color="linkedin">
            Create Account
          </Button>
          <br />
          <br />
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default NewUserModal;

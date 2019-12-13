import React, { useEffect, useState } from "react";
import { Modal, Form, Button, Select } from "semantic-ui-react";
import swal from "sweetalert";

const NewUserModal = () => {
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = () => {
    if (email.match(`[a-zA-Z0-9]+@[a-z]+.(com|in|net|org|edu)`) === null) {
      swal("Email Error", "Please Enter Email in the proper format", "error");
    } else if (firstName === "" && lastName === "") {
      swal("Name Error", "Empty First Or Last Name", "error");
    } else if (gender === "") {
      swal("Gender Error", "Gender Not Selected", "error");
    } else if (password === "" && password.length < 8) {
      swal("Password Error", "Password too short", "error");
    } else if (password !== repassword) {
      swal("Password Mismatch", "Passwords Don't Match", "error");
    } else {
      swal("Account Created", "Login to Continue.", "success").then(
        setOpen(false)
      );
    }
  };

  useEffect(() => {
    const p = new URL(document.location).searchParams.get("newuser");
    if (p !== null) {
      setOpen(true);
    }
  }, []);

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
            <input onChange={e => setEmail(e.target.value)} />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <label>First Name</label>
              <input onChange={e => setFirstName(e.target.value)} />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input onChange={e => setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
              <label>Gender</label>
              <Select
                placeholder="Select"
                options={[
                  { key: "M", value: "M", text: "Male" },
                  { key: "F", value: "F", text: "Female" }
                ]}
                onChange={e => setGender(e.target.value)}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Password</label>
              <input
                type="password"
                placeholder="Min. 8 characters"
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Retype Password</label>
              <input
                type="password"
                placeholder="Min. 8 characters"
                onChange={e => setRepassword(e.target.value)}
              />
            </Form.Field>
          </Form.Group>

          <Button
            type="submit"
            floated="right"
            color="linkedin"
            onClick={handleSubmit}
          >
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

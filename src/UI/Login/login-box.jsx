import React, { useEffect, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import NewUserModal from "./new-user-modal";
import swal from "sweetalert";

const LoginBox = () => {
  const [newUser, setNewUser] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email.match(`[a-zA-Z0-9]+@[a-z]+.(com|in|net|org|edu)`) === null) {
      swal(
        "Invalid Email",
        "Please enter your email in the correct format",
        "error"
      );
    } else if (password.length < 8) {
      swal(
        "Password Too Short",
        "Password must be greater than 8 characters",
        "error"
      );
    } else {
      console.log("Done");
    }
  };

  useEffect(() => {
    const p = new URL(document.location).searchParams.get("newuser");
    if (p !== null) {
      setNewUser(true);
    }
  }, []);

  return (
    <div>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="eg : joe@gmail.com"
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Min. 8 Characters"
          />
        </Form.Field>
        <Button
          type="submit"
          floated="right"
          color="linkedin"
          onClick={handleSubmit}
        >
          Login
        </Button>
        <NewUserModal newUser={newUser} />
      </Form>
    </div>
  );
};

export default LoginBox;

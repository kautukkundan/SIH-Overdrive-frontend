import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

import { Form, Button } from "semantic-ui-react";
import NewUserModal from "./new-user-modal";

const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

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
      history.push("/");
    }
  };

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
        <NewUserModal />
      </Form>
    </div>
  );
};

export default LoginBox;

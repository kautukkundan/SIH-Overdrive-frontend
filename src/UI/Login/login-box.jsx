import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

import { Form, Button, Dimmer, Loader } from "semantic-ui-react";
import NewUserModal from "./new-user-modal";
import { login } from "../../services/authService";

const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async () => {
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
      setLoading(true);
      const status = await login(email, password);
      setLoading(false);
      if (status === 200) {
        history.push("/");
      } else if (status === 400) {
        swal("Error", "Email or Password seems incorrect!", "error");
      } else {
        swal("Oops!", "Something went wrong! Please Retry", "error");
      }
    }
  };

  return (
    <div>
      <Dimmer active={loading}>
        <Loader />
      </Dimmer>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="eg : joe@gmail.com"
            name="username"
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Min. 8 Characters"
            name="password"
          />
        </Form.Field>
        <Button floated="right" color="linkedin" onClick={handleSubmit}>
          Login
        </Button>
        <NewUserModal />
      </Form>
    </div>
  );
};

export default LoginBox;

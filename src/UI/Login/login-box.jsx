import React, { useEffect, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import NewUserModal from "./new-user-modal";

const LoginBox = () => {
  const [newUser, setNewUser] = useState(false);

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
          <input type="email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" />
        </Form.Field>
        <Button type="submit" floated="right" color="linkedin">
          Login
        </Button>
        <NewUserModal newUser={newUser} />
      </Form>
    </div>
  );
};

export default LoginBox;

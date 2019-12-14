import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../services/authService";

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    logout();
    history.push("/login");
    //eslint-disable-next-line
  }, []);

  return null;
};

export default Logout;

import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();

  const cleanUp = () => {
    console.log("Cleaning Up!");
  };

  useEffect(() => {
    cleanUp();
    history.push("/login");
  }, []);

  return null;
};

export default Logout;

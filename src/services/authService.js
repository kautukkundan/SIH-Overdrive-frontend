import http from "./httpService";
import APIURL from "../utils/apiUrl";

import cookie from "react-cookies";

const isLoggedIn = () => {
  const userCookie = cookie.load("userAuthTokenSIH");
  if (userCookie) {
    return true;
  } else {
    return false;
  }
};

const login = async (username, password) => {
  const response = await http.post(APIURL.LOGIN_URL, {
    username: username,
    password: password
  });
  console.log(response.data.token);
  cookie.save("userAuthTokenSIH", response.data.token, { path: "/" });
};

const logout = () => {
  cookie.remove("userAuthTokenSIH", { path: "/" });
};

export { login, logout, isLoggedIn };

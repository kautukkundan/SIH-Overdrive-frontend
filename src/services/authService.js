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
  const response = await http
    .post(APIURL.LOGIN_URL, {
      username: username,
      password: password
    })
    .catch(error => {
      if (error.response) {
        return error.response;
      }
    });
  if (response.status === 200) {
    cookie.save("userAuthTokenSIH", response.data.token, { path: "/" });
  }
  return response.status;
};

const logout = () => {
  cookie.remove("userAuthTokenSIH", { path: "/" });
};

export { login, logout, isLoggedIn };

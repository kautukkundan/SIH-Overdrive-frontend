import http from "./httpService";
import APIURL from "../utils/apiUrl";

import cookie from "react-cookies";
import getAvatar from "../utils/createAvatar";

const isLoggedIn = () => {
  const userToken = cookie.load("userAuthTokenSIH");
  if (userToken) {
    http.setUserToken(userToken);
    return true;
  } else {
    return false;
  }
};

const login = async (username, password) => {
  const response = await http
    .post(APIURL.LOGIN, {
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

const registerNewUser = async (fname, lname, gender, emailid, password) => {
  const response = await http
    .post(APIURL.NEW_USER, {
      user: {
        email: emailid,
        username: emailid,
        password: password,
        first_name: fname,
        last_name: lname
      },
      gender: gender,
      avatar: getAvatar(gender)
    })
    .catch(error => {
      if (error.response) {
        return error.response;
      }
    });
  return response.status;
};

export { login, logout, isLoggedIn, registerNewUser };

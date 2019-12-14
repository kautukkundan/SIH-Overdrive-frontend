import { action } from "easy-peasy";

export default {
  token: "",
  email: "aloo@paratha.com",
  firstname: "Mahesh",
  lastname: "Darpan",
  avatar: "joe",

  setUser: action((state, data) => {
    state.email = data.user.email;
    state.firstname = data.user.first_name;
    state.lastname = data.user.last_name;
    state.avatar = data.avatar;
  }),

  setToken: action((state, token) => {
    state.token = token;
  })
};

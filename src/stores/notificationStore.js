import { action } from "easy-peasy";

export default {
  all: null,

  setNotifications: action((state, notifications) => {
    state.all = notifications;
  })
};

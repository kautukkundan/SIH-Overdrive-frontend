import { action } from "easy-peasy";

export default {
  all: null,

  // actions
  setNotifications: action((state, notifications) => {
    state.all = notifications;
  })
};

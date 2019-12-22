import userStore from "./userStore";
import teamStore from "./teamStore";
import notificationStore from "./notificationStore";
import problemsStore from "./problemsStore";

export default {
  user: userStore,
  team: teamStore,
  notifications: notificationStore,
  problems: problemsStore
};

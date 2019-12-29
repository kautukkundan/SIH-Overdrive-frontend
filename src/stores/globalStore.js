import userStore from "./userStore";
import teamStore from "./teamStore";
import notificationStore from "./notificationStore";
import problemsStore from "./problemsStore";
import commentsStore from "./commentsStore";

export default {
  user: userStore,
  team: teamStore,
  notifications: notificationStore,
  problems: problemsStore,
  comments: commentsStore
};

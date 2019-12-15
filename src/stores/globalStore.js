import userStore from "./userStore";
import { action } from "easy-peasy";

export default {
  loading: false,
  user: userStore,

  setLoading: action((state, loadingState) => {
    state.loading = loadingState;
  })
};

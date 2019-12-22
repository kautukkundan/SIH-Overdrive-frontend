import { action } from "easy-peasy";

export default {
  static: [],
  dynamic: [],
  showing: "All",

  // actions
  setAllStaticProblems: action((state, staticProblems) => {
    state.static = staticProblems;
  }),
  setAllDynamicProblems: action((state, dynamicProblems) => {
    state.dynamic = dynamicProblems;
  }),
  setShowing: action((state, showing) => {
    state.showing = showing;
  })
};

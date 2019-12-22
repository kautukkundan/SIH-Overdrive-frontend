import { action } from "easy-peasy";

export default {
  static: [],
  dynamic: [],

  // actions
  setAllStaticProblems: action((state, staticProblems) => {
    state.static = staticProblems;
  }),
  setAllDynamicProblems: action((state, dynamicProblems) => {
    state.dynamic = dynamicProblems;
  })
};

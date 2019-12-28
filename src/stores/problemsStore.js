import { action } from "easy-peasy";

export default {
  static: [],
  dynamic: [],
  showing: "All",
  apple: [],

  // actions
  setAllStaticProblems: action((state, staticProblems) => {
    state.static = staticProblems;
  }),
  setAllDynamicProblems: action((state, dynamicProblems) => {
    state.dynamic = dynamicProblems;
  }),
  setShowing: action((state, showing) => {
    state.showing = showing;
  }),
  updateLink: action((state, payload) => {
    const { problem_id, links } = payload;
    const target_index = state.dynamic.findIndex(item => {
      return item.problem_statement === problem_id;
    });
    state.dynamic[target_index].presentation = links.presentation;
    state.dynamic[target_index].document = links.document;
  })
};

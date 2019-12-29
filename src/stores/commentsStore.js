import { action } from "easy-peasy";

export default {
  all: [],

  // actions
  setComments: action((state, comments) => {
    state.all = comments;
  }),
  addNewComment: action((state, payload) => {
    state.all.push(payload);
  })
};

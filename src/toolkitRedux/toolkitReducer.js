import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  todos: ["снять видео", "смонтировать видео", "рассказать про toolkit"],
};

export const incriment = createAction("INCRIMENT");
export const decriment = createAction("DECRIMENT");

export default createReducer(initialState, {
  [incriment]: function (state) {
    state.count += 1;
  },
  [decriment]: function (state) {
    state.count -= 1;
  },
});

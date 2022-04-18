import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    count: 0,
    todos: ["снять видео", "смонтировать видео", "рассказать про toolkit"],
  },
  reducers: {
    incriment(state) {
      state.count += 1;
    },
    decriment(state) {
      state.count -= 1;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state) {
      state.todos.pop();
    },
  },
});

export default toolkitSlice.reducer;
export const { incriment, decriment, addTodo, deleteTodo } =
  toolkitSlice.actions;

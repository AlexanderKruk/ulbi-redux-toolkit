const INCRIMENT = "INCRIMENT";
const DECRIMENT = "DECRIMENT";
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const initialState = {
  count: 0,
  todos: ["снять видео", "смонтировать видео", "рассказать про toolkit"],
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case INCRIMENT:
      return { ...state, count: state.count + 1 };
    case DECRIMENT:
      return { ...state, count: state.count - 1 };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.slice(0, state.todos.length - 1)],
      };
    default:
      return state;
  }
}

export const incriment = () => ({ type: INCRIMENT });
export const decriment = () => ({ type: DECRIMENT });
export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const deleteTodo = () => ({ type: DELETE_TODO });

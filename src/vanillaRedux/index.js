import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import mainReducer from "./mainReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  main: mainReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

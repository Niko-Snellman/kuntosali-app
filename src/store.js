import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const initialStore = {
  exercises: [{ name: "" }],
};

const exerciseReducer = (store = { initialStore }, action) => {
  switch (action.store) {
    case "ADD_EXERCISE": {
      return { exercises: [...store.exercises, action.payload] };
    }
    default:
      return store;
  }
};

export default createStore(
  combineReducers({ exercises: exerciseReducer }),
  applyMiddleware(createLogger({ collapsed: true }))
);

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// Place the reducers in connectRouter
const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
  });
export default createRootReducer;

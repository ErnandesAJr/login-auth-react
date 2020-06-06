import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from "./user";
// If you want to create other Reducers, you must create a file with the name of the reducer, for example "user.js", inside ./reducers.
const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user,
    /**
     * Other reducers
     */
  });
export default createRootReducer;

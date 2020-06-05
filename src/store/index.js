import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import createRootReducer from "./reducers/index";
import history from "../routes/history";

const middlewares = [routerMiddleware(history), thunk];

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(...middlewares)
  )
);


export default store;

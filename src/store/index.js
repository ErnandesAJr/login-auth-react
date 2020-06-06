import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore, compose } from "redux";
/**
 * 
 In most cases, on smaller projects, using Thunk is more than enough if you need to make very few asynchronous requests and your application is not complex.
  PROS
    Uses Promise and can use async / await
    Simplicity and ease
  AGAINST
    Callback hell
    Complexity to climb
    Complexity for writing tests
    Promises cannot be canceled, so we do not have 100% control over our asynchronous shares.
 */
import thunk from "redux-thunk";
import createRootReducer from "./ducks/index";
import history from "../routes/history";

const middlewares = [routerMiddleware(history), thunk];

const store = createStore(
  createRootReducer(history),
  compose(applyMiddleware(...middlewares))
);

export default store;

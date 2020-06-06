import { applyMiddleware, createStore, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./ducks/index";
import history from "../routes/history";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();

const middlewares = [routerMiddleware(history), sagaMiddleware];

const store = createStore(
  createRootReducer(history),
  compose(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

export default store;

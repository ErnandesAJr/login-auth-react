import { applyMiddleware, createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { routerMiddleware } from "connected-react-router";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "./ducks/index";
import history from "../routes/history";
import rootSaga from "./sagas";

const persistConfig = {
  key: "loginAuth",
  storage,
  /**
   * Save only the gearboxes you want to local storage => whitelist: ['user']
   * Delete reducers you don't want to save => blacklist:['some']
   */
};
const sagaMiddleware = createSagaMiddleware();
const middlewares = [routerMiddleware(history), sagaMiddleware];

const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
);

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };

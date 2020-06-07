import { takeLatest, put, call } from "redux-saga/effects";
import { createActions, createReducer } from "reduxsauce";
import { push } from "connected-react-router";
import LoginApi from "~/services/login";

const api = new LoginApi();
/**
 * These are the actions that can be called by the components
 */
export const { Types, Creators } = createActions({
  signIn: ["email", "password"],
  signOut: [],
});
const INITIAL_STATE = {};

function* sendResquestLogin(action) {
  try {
    /**
     * If the login is successful, update the user data and redirect him to the next page
     */
    const response = yield call(api.loginPost, action.email, action.name);
    const { name, email, token, avatar } = response;
    yield put(push("/profile"));
    yield put({ type: "user/SUCESS", name, email, avatar, token });
  } catch (error) {
    /**
     * If the login is not successful it updates the login error params by sending to another reducer
     */
    yield put({
      type: "user/ERROR",
      status: error.status,
      message: error.message,
    });
  }
}

function* clearDataUser(action) {
  console.log("entrou");
  yield put(push("/"));
  yield put({ type: "user/SIGN_OUT" });
}

const signOutUser = (state = INITIAL_STATE, action) => {
  return {};
};

const signInUser = (state = INITIAL_STATE, action) => {
  const { email, name, token, avatar } = action;
  /**
   * There may be a variable that is an array
   */
  return {
    ...state,
    email,
    name,
    token,
    avatar,
  };
};

const errorRequest = (state = INITIAL_STATE, action) => {
  const { status, message } = action;
  return { status, message };
};

export const login = takeLatest([Types.SIGN_IN], sendResquestLogin);
export const logoff = takeLatest([Types.SIGN_OUT], clearDataUser);

export const HANDLERS = {
  "user/SUCESS": signInUser,
  "user/ERROR": errorRequest,
  "user/SIGN_OUT": signOutUser,
};

export default createReducer(INITIAL_STATE, HANDLERS);

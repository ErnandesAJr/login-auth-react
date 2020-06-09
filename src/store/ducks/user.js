import { takeLatest, put, call } from "redux-saga/effects";
import { createActions, createReducer } from "reduxsauce";
import { push } from "connected-react-router";
import LoginApi from "~/services/login";

const api = new LoginApi();
/**
 * These are the actions that can be called by the components
 */
export const { Types, Creators } = createActions({
  signIn: ["email", "password", "location"],
  signOut: [],
  forgotPassword: ["email"],
});
const INITIAL_STATE = {};

function* sendResquestLogin(action) {
  try {
    const response = yield call(api.loginPost, action.email, action.password);
    const { name, email, token, avatar } = response;
    const location = action.location;
    yield put(push("/profile"));
    yield put({ type: "user/SUCESS", name, email, avatar, token, location });
  } catch (error) {
    const { status, message } = error;
    yield put({ type: "user/ERROR", status, message });
  }
}

function* redirectUserForget(action) {
  yield put(push("/forget"));
  yield put({ type: "user/Forgot_Password" });
}

function* redirectUserLogOff(action) {
  yield put(push("/"));
  yield put({ type: "user/SIGN_OUT" });
}

const stateSignOutUser = (state = INITIAL_STATE, action) => {
  return {};
};

const stateSignInUser = (state = INITIAL_STATE, action) => {
  const { email, name, token, avatar, location } = action;
  return { email, name, token, avatar, location };
};

const stateForgetUser = (state = INITIAL_STATE, action) => {
  return action.email ? { email: action.email } : {};
};

const stateErrorRequest = (state = INITIAL_STATE, action) => {
  const { status, message } = action;
  return { status, message };
};

export const login = takeLatest([Types.SIGN_IN], sendResquestLogin);
export const logoff = takeLatest([Types.SIGN_OUT], redirectUserLogOff);
export const forgotPassword = takeLatest([Types.SIGN_OUT], redirectUserForget);

export const HANDLERS = {
  "user/SUCESS": stateSignInUser,
  "user/ERROR": stateErrorRequest,
  "user/SIGN_OUT": stateSignOutUser,
  "user/Forgot_Password": stateForgetUser,
};

export default createReducer(INITIAL_STATE, HANDLERS);

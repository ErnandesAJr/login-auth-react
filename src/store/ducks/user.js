import { takeLatest, put, call } from "redux-saga/effects";
import { createActions, createReducer } from "reduxsauce";
import { push } from "connected-react-router";

/**
 * Usuario envia por esse função
 * These are the actions that can be called by the components
 */
export const { Types, Creators } = createActions({
  signIn: ["email", "password"],
  error: ["status", "message"],
});

const INITIAL_STATE = {};

/**
 * Simulating a login request
 */
function loginPost(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        name: "Maria Bonita",
        email: "mariabonita@email.com",
        token: "es0546504eq98as489asd5naksbdah01",
        avatar: "uma foto bonita da maria",
      };
      resolve(user);
      // const error = {
      //   status: "503",
      //   message: "TA PEGANDO FOGO BIXO",
      // };
      // reject(error);
    }, 2000);
  });
}

function* asyncSignIn(action) {
  try {
    /**
     * If the login is successful, update the user data and redirect him to the next page
     */
    const response = yield call(loginPost, action.email, action.name);
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

export const login = takeLatest([Types.SIGN_IN], asyncSignIn);

const sucess = (state = INITIAL_STATE, action) => {
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

const error = (state = INITIAL_STATE, action) => {
  const { status, message } = action;
  return { status, message };
};

export const HANDLERS = {
  "user/SUCESS": sucess,
  "user/ERROR": error,
};
export default createReducer(INITIAL_STATE, HANDLERS);

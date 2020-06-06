import { push } from "connected-react-router";
import { createReducer } from "reduxsauce";

const INITIAL_STATE = {};
export const Types = {
  SIGN_IN: "user/SIGN_IN",
  ERROR: "user/ERROR",
};

/**
 * This is the reducer that changes the state
 */
const singIn = (state = INITIAL_STATE, action) => {
  const { email, name, token, avatar } = action;
  return { ...state, email, name, token, avatar };
};

const error = (state = INITIAL_STATE, action) => {
  const { status, message } = action;
  return { status, message };
};

export const HANDLERS = {
  [Types.SIGN_IN]: singIn,
  [Types.ERROR]: error,
};
export default createReducer(INITIAL_STATE, HANDLERS);

/**
 * These are the actions that can be called by the components
 */
export const Creators = {
  singIn: (email, password) /*=> (dispatch)*/ => {
    /**
     * Simulating a login request and if successful it redirects you to another page
     */
    // new Promise((resolve) =>
    // setTimeout(() => {
    // dispatch(push("/profile"));
    // dispatch({
    return {
      type: "user/SAGASIGN_IN",
      email,
      password,
    };
    // });
    // }
    // , 3000)
    // );
  },
};

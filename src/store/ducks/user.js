import { push } from "connected-react-router";
import { createReducer } from "reduxsauce";

const INITIAL_STATE = { name: null, email: null, token: null, avatar: null };
export const Types = {
  SIGN_IN: "user/SIGN_IN",
  // LOG_OFF: "user/LOG_OFF",
};

/**
 * This is the reducer that changes the state
 */
const singIn = (state = INITIAL_STATE, action) => {
  const { email, name, token, avatar } = action;
  return { ...state, email, name, token, avatar };
};

export const HANDLERS = {
  [Types.SIGN_IN]: singIn,
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

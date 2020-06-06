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
  singIn: (name, avatar, email, token) => (dispatch) => {
    new Promise((resolve) =>
      setTimeout(() => {
        dispatch(push("/profile"));
        dispatch({
          type: Types.SIGN_IN,
          name,
          avatar,
          email,
          token,
        });
      }, 3000)
    );
  },
};

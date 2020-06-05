import { push } from "connected-react-router";

export const signIn = (name, avatar, email, token) => (dispatch) => {
  new Promise((resolve) =>
    setTimeout(() => {
      console.log("Go!");
      dispatch(push("/profile"));
      dispatch({
        type: "SIGN_IN",
        name,
        avatar,
        email,
        token,
      });
    }, 3000)
  );
};

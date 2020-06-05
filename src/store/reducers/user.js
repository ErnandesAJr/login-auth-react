const INITIAL_STATE = {
  name: "",
  email: "",
  avatar: "",
  token: "",
};

export default function user(state = INITIAL_STATE, action) {
  if (action.type === "SIGN_IN") {
    console.log("Sign In");
    console.log(action);
    return {
      ...state,
      name: action.name,
      avatar: action.avatar,
      email: action.email,
      token: action.token,
    };
  }
  return state;
}

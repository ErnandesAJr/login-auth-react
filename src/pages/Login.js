import React from "react";
import { connect } from "react-redux";
import { Creators as UserActions } from "../store/ducks/user";

//Must be a login class

const Login = ({ singIn, user }) => (
  <div>
    <h1> Main </h1>
    <button onClick={() => singIn("mariabonita@email.com", "as212312")}>
      Entrar
    </button>
    {user.name ? <h1>{user.name}</h1> : <h1>{user.message}</h1>}
  </div>
);

export default connect(
  (state) => ({
    user: state.user,
  }),
  UserActions
)(Login);

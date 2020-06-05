import React from "react";
import { connect } from "react-redux";
import * as UserActions from "../store/actions/user";

//Must be a login class

const Main = ({ signIn, dispatch }) => (
  <div>
    <h1> Main </h1>
    <button onClick={() => signIn("Maria", "Bonita", "Email", "Token")}>
      Entrar
    </button>
  </div>
);

export default connect(null, UserActions)(Main);

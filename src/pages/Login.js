import React from "react";
import { connect } from "react-redux";
import { Creators as UserActions } from "../store/ducks/user";

//Must be a login class

const Main = ({ singIn }) => (
  <div>
    <h1> Main </h1>
    <button onClick={() => singIn("Maria", "Bonita", "Email")}>Entrar</button>
  </div>
);

export default connect(null, UserActions)(Main);

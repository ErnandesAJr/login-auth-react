import React from "react";
import { connect } from "react-redux";
import * as AuthActions from "../store/actions";

//Must be a login class
const Main = ({ signIn }) => (
  <div>
    <h1> Main </h1>
    <button onClick={signIn}>Entrar</button>
  </div>
)

export default connect(null, AuthActions)(Main)

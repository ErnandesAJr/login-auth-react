import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginApi from "../services/login";
import { ConnectedRouter } from "connected-react-router";
import Login from "../pages/Login/index";
import Profile from "../pages/Profile/index";
import history from "./history";
const api = new LoginApi();
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      api.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <PrivateRoute path="/app" component={() => <h1> OMG chegou</h1>} />
    </Switch>
  </ConnectedRouter>
);
export default Routes;

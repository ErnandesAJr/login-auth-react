import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth";
import { ConnectedRouter } from "connected-react-router";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import history from "./history";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
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
      <Route exact path="/" component={Main} />
      <Route exact path="/profile" component={Profile} />
      <PrivateRoute path="/app" component={() => <h1> OMG chegou</h1>} />
    </Switch>
  </ConnectedRouter>
);
export default Routes;

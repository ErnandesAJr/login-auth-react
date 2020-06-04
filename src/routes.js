import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={() => <h1>Eita veio aqui</h1>}></Route>
    </Switch>
  </BrowserRouter>
)

export default Routes;
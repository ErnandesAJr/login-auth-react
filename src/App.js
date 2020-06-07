import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Routes from "~/routes";
import React from "react";
import { store, persistor } from "~/store";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes></Routes>
    </PersistGate>
  </Provider>
);
export default App;

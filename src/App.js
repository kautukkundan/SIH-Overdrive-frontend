import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { StoreProvider, createStore } from "easy-peasy";
import globalStore from "./globalStore";

import Login from "./UI/Login/login";
import Home from "./UI/Home/home";

const store = createStore(globalStore);

function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>

      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;

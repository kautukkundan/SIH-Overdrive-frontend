import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { StoreProvider, createStore } from "easy-peasy";
import globalStore from "./globalStore";

import Login from "./UI/Login/login";

const store = createStore(globalStore);

function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>

        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>

        <Switch>
          <Route path="/home">
            <p>Home</p>
          </Route>
        </Switch>

        {/* <Redirect path="/" to="/login" exact /> */}
        
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;

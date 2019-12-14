import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { StoreProvider, createStore } from "easy-peasy";
import globalStore from "./globalStore";

import Login from "./UI/Login/login";
import Logout from "./UI/Login/logout";
import Home from "./UI/Home/home";

const store = createStore(globalStore);

function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;

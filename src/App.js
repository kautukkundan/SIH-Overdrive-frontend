import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { StoreProvider, createStore } from "easy-peasy";
import globalStore from "./globalStore";

import Login from "./UI/Login/login";
import Home from "./UI/Home/home";

const store = createStore(globalStore);

function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Home} />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { StoreProvider, createStore } from "easy-peasy";
import globalStore from "./globalStore";

import Login from "./UI/Login/login";
import Home from "./UI/Home/home";
import ProblemStatementDetail from "./UI/ProblemStatement/problem-statement-detail";

const store = createStore(globalStore);

function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/problem/:id" component={ProblemStatementDetail} />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;

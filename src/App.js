import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { StoreProvider, createStore } from "easy-peasy";
import globalStore from "./stores/globalStore";

import Login from "./UI/Login/login";
import Logout from "./UI/Login/logout";
import Home from "./UI/Home/home";
// import MobileHome from "./UI/Home/mobile-home";

import ReactGa from "react-ga";

ReactGa.initialize(process.env.REACT_APP_GA_ID);

const store = createStore(globalStore);

function App() {
  // if (window.innerWidth < 500) {
  //   return <MobileHome />;
  // }
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

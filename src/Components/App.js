import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Sessions from "./Sessions";
import Seats from "./Seats";
import Success from "./Success";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sessoes/:idFilme" exact>
            <Sessions />
          </Route>
          <Route path="/assentos/:idSessao" exact>
            <Seats />
          </Route>
          <Route path="/sucesso" exact>
            <Success />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Onboard from "./pages/Onboard";
import Home from "./pages/Home";

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={""}>
        <Switch>
          <Route exact path='/' component={Onboard} />
          <Route exact path='/get-started' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch }  from 'react-router-dom';
import Home from "../views/Home"
import Page from "react-page-loading";
import "bootstrap/dist/js/bootstrap.min.js";
import 'styles/base.scss';

const App = () => {
  return (
    <>
      <Router>
        <Page loader={"rotate-spin"} color={"#EAB96A"} size={10}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Page>
      </Router>
    </>
  )
}

export default App;


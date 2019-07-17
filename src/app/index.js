import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Page from "react-page-loading";
import "bootstrap/dist/js/bootstrap.min.js";
import 'styles/base.scss';

const App = () => {
  return (
    <>
      <Router>
        <Page loader={"rotate-spin"} color={"#EAB96A"} size={10}>
          <Routes />
        </Page>
      </Router>
    </>
  )
}

export default App;


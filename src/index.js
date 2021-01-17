import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect, HashRouter } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import Landing from "views/Landing.js";
import AboutUs from "views/AboutUs";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Route exact path="/" component={Landing} />
      <Route path="/aboutus" component={AboutUs} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

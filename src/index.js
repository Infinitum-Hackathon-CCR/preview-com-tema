import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import Landing from "views/Landing.js";
import AboutUs from "views/AboutUs";
import Admin from 'layouts/Admin'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Route exact path="/" component={Landing} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/admin" component={Admin} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

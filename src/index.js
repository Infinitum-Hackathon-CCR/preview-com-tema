import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect, HashRouter } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import AboutUs from "views/AboutUs";

ReactDOM.render(
  <HashRouter basename="/">
    {/* add routes with layouts */}
    <Route path="/admin" component={Admin} />
    <Route path="/auth" component={Auth} />
    {/* add routes without layouts */}
    <Route path="/landing" exact component={Landing} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/aboutus" exact component={AboutUs} />
    <Route path="/" exact component={Landing} />
    {/* add redirect for first page */}
    <Redirect from="*" to="/" />
  </HashRouter>,
  document.getElementById("root")
);

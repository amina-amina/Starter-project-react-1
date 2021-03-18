import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DashboardPage from "../pages/dashboard-page ";
import Error404Page from "../pages/Error 404 page";
import LmsPage from "../pages/lms-page";
import RegisterPage from "../pages/register/register-page";
import LgPage from "../pages/Log/login-page";
export default function RouterApp() {
  return (
    <Router>

        <Switch>
        <Route exact path="/" component={LmsPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/admin" component={LgPage}/>
            <Route path="/dash" component={DashboardPage}/>
            <Route path="*" component={Error404Page} />
        </Switch>

    </Router>
  );
}
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import dashboard_page from "../dashboard-page ";
import error404_page from "../Error 404 page";
import lms_page from "../lms-page";
import login_page from "../login-page";
import register_page from "../register-page";

export default function RouterApp() {
  return (
    <Router>

        <Switch>
            
            <Route exact path="/" component={lms_page}/>
            <Route path="/register" component={register_page}/>
            <Route path="/admin" component={login_page}/>
            <Route path="/dash" component={dashboard_page}/>
            <Route path="*" component={error404_page} />
        </Switch>

    </Router>
  );
}
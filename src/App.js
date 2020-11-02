import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import Home from "./screen/home/Home";
import Login from "./screen/login/Login";
import Register from "./screen/register/Register";
import EditProfile from "./screen/editprofile/EditProfile";
import Product from "./screen/product/Product";
import FollowCategory from "./screen/customization/FollowCategory";
import Setting from "./screen/setting/Setting";
import Organization from "./screen/organization/Organization";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/editprofile" component={EditProfile} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/editcategory" component={FollowCategory} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/organization" component={Organization} />
      </Switch>
    </Router>
  );
}

export default App;

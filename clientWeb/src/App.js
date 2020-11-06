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
import ProductDetail from "./screen/productDetail/ProductDetail";
import About from "./screen/about/About";
import AllMessage from "./screen/allMessage/AllMessage";
import Chat from "./screen/chat/Chat";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/editprofile" component={EditProfile} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/editcategory" component={FollowCategory} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/organization" component={Organization} />
        <Route exact path="/about" component={About} />
        <Route exact path="/chat" component={AllMessage} />
        <Route exact path="/chat/:id" component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;

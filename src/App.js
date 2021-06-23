import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
/** SCREEN */
import Login from './screen/login/Login';
import Register from './screen/register/Register';
import Home from './screen/home/Home';
import EditProfile from './screen/editprofile/EditProfile';
import FavoritesScreen from './screen/favoritesScreen/FavoritesScreen';
import Review from './screen/review/Review';
import Product from './screen/product/Product';
import CreateProduct from './screen/createProduct/CreateProduct';
import EditProduct from './screen/createProduct/EditProduct';
import FollowCategory from './screen/follow/FollowCategory';
import Setting from './screen/setting/Setting';
import Organization from './screen/organization/Organization';
import ProductDetail from './screen/productDetail/ProductDetail';
import AllMessage from './screen/allMessage/AllMessage';
import Chat from './screen/chat/Chat';
import Payment from './screen/payment/Payment';
import Profile from './screen/profile/Profile';
import Footer from './component/footer/Footer'
import About from './screen/footer/about/About';
import ForbiddenServices from './screen/footer/forbiddenServices/ForbiddenServices';
import Notification from './screen/notification/Notification';
import Terms from "./screen/footer/terms/Terms"
import Navbar from './component/navbar/Navbar';
import ProtectedRoute from './ProtectedRoute';
/** REDUX */
import {
  getProductAction,
  searchProductAction,
} from './redux/actions/ProductAction';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  /** REDUX */
  const productStore = useSelector((state) => state.productReducer);
  const userStore = useSelector((state) => state.authReducer)

  return (
    <BrowserRouter>
      <Navbar location={window.location} />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/favorites" component={FavoritesScreen} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/profile" component={Profile} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/profile/edit" component={EditProfile} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/review/:id" component={Review} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/product" component={Product} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/product/organization" component={Organization} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/product/createproduct" component={CreateProduct} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/product/edit/:id" component={EditProduct} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/product/:id" component={ProductDetail} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/setting" component={Setting} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/followcategory" component={FollowCategory} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/followcategory/edit" component={FollowCategory} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/chat" component={AllMessage} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/chat/:id" component={Chat} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/about" component={About} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/terms" component={Terms} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/payment" component={Payment} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/notification" component={Notification} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path='/forbiddenservices' component={ForbiddenServices} isAuth={userStore.isConnected} />
      </Switch>

    </BrowserRouter>
  );
};

export default App;

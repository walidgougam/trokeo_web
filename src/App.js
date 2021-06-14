import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import Login from './screen/login/Login';
import Register from './screen/register/Register';
import Home from './screen/home/Home';
import EditProfile from './screen/editprofile/EditProfile';
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
import {
  getProductAction,
  searchProductAction,
} from './redux/actions/ProductAction';
import Navbar from './component/navbar/Navbar';

//REDUX
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  //REDUX
  const getProduct = useSelector((state) => state.productReducer);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/edit" component={EditProfile} />
        <Route exact path="/review/:id" component={Review} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/product/organization" component={Organization} />
        <Route exact path="/product/createproduct" component={CreateProduct} />
        <Route exact path="/product/edit/:id" component={EditProduct} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/followcategory" component={FollowCategory} />
        <Route exact path="/followcategory/edit" component={FollowCategory} />
        <Route exact path="/chat" component={AllMessage} />
        <Route exact path="/chat/:id" component={Chat} />
        <Route exact path="/about" component={About} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/notification" component={Notification} />
        <Route
          exact
          path={'/forbiddenservices'}
          component={ForbiddenServices}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
/** SCREEN */
import {
  AllMessage,
  AllReview,
  Chat,
  CreateProduct,
  EditProfile,
  EditProduct,
  FavoritesScreen,
  FollowCategory,
  About,
  ForbiddenServices,
  Terms,
  GiveReview,
  Home,
  Login,
  Notification,
  Organization,
  Payment,
  Product,
  ProductDetail,
  Profile,
  Register,
  Setting,
} from './screen/index'
import { Footer, Navbar } from './component/index';
import ProtectedRoute from './ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';

const App = ({ history }) => {
  /** REDUX */
  const productStore = useSelector((state) => state.productReducer);
  const userStore = useSelector((state) => state.authReducer)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/favorites" component={FavoritesScreen} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/profile" component={Profile} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/profile/edit" component={EditProfile} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/allreview/:id" component={AllReview} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/givereview/:id" component={GiveReview} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/product/edit/:id" component={EditProduct} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/product" component={Product} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/product/organization" component={Organization} isAuth={userStore.isConnected} />
        <ProtectedRoute exact path="/product/createproduct" component={CreateProduct} isAuth={userStore.isConnected} />
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

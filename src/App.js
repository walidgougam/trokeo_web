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
  About,
  Chat,
  CreateProduct,
  EditProfile,
  EditProduct,
  FavoritesScreen,
  FollowCategory,
  ForbiddenServices,
  GiveReview,
  HelpCenter,
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
  Terms,
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
        {/* <Route exact path="/favorites" component={FavoritesScreen} isAuth={userStore.isConnected} />
        <Route exact path="/profile" component={Profile} isAuth={userStore.isConnected} />
        <Route exact path="/profile/edit" component={EditProfile} isAuth={userStore.isConnected} />
        <Route exact path="/allreview/:id" component={AllReview} isAuth={userStore.isConnected} />
        <Route exact path="/givereview/:id" component={GiveReview} isAuth={userStore.isConnected} />
        <Route exact path="/product/edit/:id" component={EditProduct} isAuth={userStore.isConnected} />
        <Route exact path="/product" component={Product} isAuth={userStore.isConnected} />
        <Route exact path="/product/organization" component={Organization} isAuth={userStore.isConnected} />
        <Route exact path="/product/createproduct" component={CreateProduct} isAuth={userStore.isConnected} />
        <Route exact path="/product/:id" component={ProductDetail} isAuth={userStore.isConnected} />
        <Route exact path="/setting" component={Setting} isAuth={userStore.isConnected} />
        <Route exact path="/followcategory" component={FollowCategory} isAuth={userStore.isConnected} />
        <Route exact path="/followcategory/edit" component={FollowCategory} isAuth={userStore.isConnected} />
        <Route exact path="/chat" component={AllMessage} isAuth={userStore.isConnected} />
        <Route exact path="/conversation" component={Chat} isAuth={userStore.isConnected} />
        <Route exact path="/about" component={About} isAuth={userStore.isConnected} />
        <Route exact path="/terms" component={Terms} isAuth={userStore.isConnected} />
        <Route exact path="/payment" component={Payment} isAuth={userStore.isConnected} />
        <Route exact path="/notification" component={Notification} isAuth={userStore.isConnected} />
        <Route exact path='/forbiddenservices' component={ForbiddenServices} isAuth={userStore.isConnected} />
        <Route exact path='/helpcenter' component={HelpCenter} isAuth={userStore.isConnected} /> */}
        <ProtectedRoute exact path="/favorites" component={FavoritesScreen} isAuth={userStore.isConnected} />
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
        <ProtectedRoute exact path='/helpcenter' component={HelpCenter} isAuth={userStore.isConnected} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

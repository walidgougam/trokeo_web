import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './redux/reducers/index';
import {
  getProductAction,
  searchProductAction,
} from './redux/actions/ProductAction';
import { loginSuccessAction } from './redux/actions/AuthAction'
import createdStore from './store/index';

const { store } = createdStore()
// store.dispatch(getProductAction());
// store.dispatch(loginSuccessAction());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

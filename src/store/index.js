import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import createReducer from "../redux/reducers";
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: "root",
  timeout: 0,
  storage,
  blacklist: [],
};


const persistedReducer = persistReducer(persistConfig, createReducer());

export default () => {
  let enhancer;

  if (process.env.NODE_ENV === "development")
  {
    enhancer = composeWithDevTools(applyMiddleware(thunk));
  } else
  {
    enhancer = compose(applyMiddleware(thunk));
  }

  const store = createStore(persistedReducer, enhancer);

  const persist = persistStore(store);

  return { store, persist };
};

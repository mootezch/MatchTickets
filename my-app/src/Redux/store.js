import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
import productReducer from "./productReducer";
  
  const persistConfig = {
    key: "user",
    version: 1,
    storage,
  };
  
  const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });
  
  const persistedReducer = persistReducer(persistConfig, userReducer);
  
  export const store = configureStore({
    reducer: {
      cart : cartReducer,
      user : userReducer,
      products:productReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export let persistor = persistStore(store);
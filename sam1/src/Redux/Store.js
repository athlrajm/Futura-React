import { configureStore,combineReducers } from '@reduxjs/toolkit';

import DataReducer from './DataSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  const persistConfig = {
    key: 'login',
    version: 1,
    storage,
  }
const rootreducer=combineReducers({datas:DataReducer})
const persistedReducer = persistReducer(persistConfig, rootreducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  export let persistor = persistStore(store)
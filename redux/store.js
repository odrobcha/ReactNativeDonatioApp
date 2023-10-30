import {combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

import {logger} from 'redux-logger'

import User from './reducers/User';
import Categories from './reducers/Categories';
import Donations from './reducers/Donations';



const rootReducer = combineReducers({
    user: User,
    categories: Categories,
    donations: Donations
});
const configuration = {
    key: 'root',
    storage: AsyncStorage,
    version: 1
};
const persistedReducer = persistReducer(configuration, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
      //  return getDefaultMiddleware({serializableCheck: false}).concat(logger)
        return getDefaultMiddleware({serializableCheck: false})
    }
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //       serializableCheck: {
    //           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //       },
    //   }),
});

export default store;

export const persistor = persistStore(store);

//persistor.purge(); //to clean storage

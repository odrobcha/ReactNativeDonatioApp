import {combineReducers } from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import {logger} from 'redux-logger'

import User from './reducers/User'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const rootReducer = combineReducers({
    user: User
});

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(logger)
    }
})

export default store;

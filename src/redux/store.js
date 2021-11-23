import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger'
import userReducer from './user/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';



const store=createStore(userReducer,composeWithDevTools( applyMiddleware(logger)));


export default store;
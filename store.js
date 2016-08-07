import 'babel-polyfill';
import user from './reducer';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import userSaga from './saga';

// Create the saga middleware
const sagaMiddleaware = createSagaMiddleware();

// Mount the middleware and reducer to the store
export const store = createStore(
  user,
  applyMiddleware(sagaMiddleaware));

// Now run the saga
sagaMiddleaware.run(userSaga);


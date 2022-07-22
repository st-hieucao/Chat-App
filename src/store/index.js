import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './app-reducer';
import appMiddleware from './app-middleware';

const saga = createSagaMiddleware();

const middlewares = [saga];

const store = compose(applyMiddleware(...middlewares))(createStore)(appReducer);
saga.run(appMiddleware);

export default store;

/* eslint-disable no-debugger, no-console */
import { all } from 'redux-saga/effects';
import { watchUser } from './user/middlewares';

export default function* appMiddleware() {
  yield all([
    watchUser(),
  ]);
}

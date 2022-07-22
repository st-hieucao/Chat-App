import types from "../types";
import axios from 'axios';
import { baseUrl } from "../utils/config";
import { all, takeLatest } from 'redux-saga/effects';

let baseUrlUser =  `${baseUrl}/user`

function* signup({ payload, resolve, reject }) {
  const url = `${baseUrlUser}/register`;

  try {
    const res = yield axios.post(url, payload);
    resolve && resolve(res.data);
  } catch (error) {
    reject && reject({ message: 'Register fail'});
  }
}

function* getUsers({ payload, resolve, reject }) {
  const url = `${baseUrlUser}/get-all`;

  try {
    const res = yield axios.get(url);
    resolve && resolve(res.data);
  } catch (error) {
    reject && reject({ message: 'Get data fail'});
  }
}

export function* watchUser() {
  yield all([
    takeLatest(types.signup, signup),
    takeLatest(types.getUsers, getUsers),
  ])
}

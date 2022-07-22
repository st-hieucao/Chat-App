import types from "../types";

export const signup = (data, resolve, reject) => {
  return {
    payload: data,
    type: types.signup,
    resolve,
    reject
  }
}

export const logout = () => {
  return {
    type: types.logout,
  }
}

export const getUser = (data, resolve, reject) => {
  return {
    payload: data,
    type: types.getUsers,
    resolve,
    reject
  }
}

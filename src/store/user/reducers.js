import types from "../types";

const initialState = {
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.logout: {
      localStorage.clear();
      return {...state};
    }
    default: return state;
  }
};

import { combineReducers } from 'redux';
import { userReducer } from './user/reducers';

const appReducer = combineReducers({
  userReducer,
});

export default appReducer;

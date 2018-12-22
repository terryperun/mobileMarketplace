import { combineReducers } from 'redux';
import app from './app';

const appReducer = combineReducers({
  app: (state = {}, action) => state,
});

export default appReducer;

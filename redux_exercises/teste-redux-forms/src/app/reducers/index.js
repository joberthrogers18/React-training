import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sum from './Sum';

export default combineReducers({
  sum,
  form: formReducer,
});
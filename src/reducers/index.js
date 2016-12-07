/**
 * Created by yjf on 16-12-6.
 */
import { combineReducers } from 'redux'
import todos from './todos.reducer';
import login from './login.reducer';


const todoApp = combineReducers({
  todos,
  login
});

export default todoApp;

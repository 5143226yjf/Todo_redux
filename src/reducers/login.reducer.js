/**
 * Created by yjf on 16-12-6.
 */
'use strict';
import {LOGIN_TODO} from '../actions/const';

function login(state=[],action) {
  switch (action.type){
    case LOGIN_TODO:
      return [...state,{name:action.name}];
    default:
      return state;
  }
}
export default login;

/**
 * Created by yjf on 16-12-6.
 */

'use strict';
import * as types from './const';

export const loginTodo=(name)=>{
  return{
    type:types.LOGIN_TODO,
    name
  }
};
export  const addTodo=(text)=> {
  return {
    type:types.ADD_TODO,
    text
  };
};

export const completeTodo=(index)=>{
  return{
    type:types.COMPLETE_TODO,
    index
  }
};

export const deleteTodo=()=>{
  return{
    type:types.DELETE_TODO
  }
};

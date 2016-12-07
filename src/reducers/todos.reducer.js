/**
 * Created by yjf on 16-12-6.
 */
'use strict';
import {ADD_TODO,COMPLETE_TODO,DELETE_TODO} from '../actions/const';

const initalState=[{
  content:'写todo',
  isComplete:'0'
},
  {
    content:'matlab作业',
    isComplete:'0'
  }];
function todos(state = initalState,action) {
  switch (action.type){
    case ADD_TODO:
      return [{content: action.text.content,isComplete:0}, ...state];
    case COMPLETE_TODO:
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
}
export default todos;

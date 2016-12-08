/**
 * Created by yjf on 16-12-6.
 */
'use strict';
import {ADD_TODO,COMPLETE_TODO,DELETE_TODO} from '../actions/const';

const initalState=[{
  time:'12月6日',
  title:'写todo',
  content:'hahha'
},
  {
    time:'12月7日',
    title:'matlab作业',
    content:'hahha'
  }];
function todos(state = initalState,action) {
  switch (action.type){
    case ADD_TODO:
      return [{time:action.text.time,title:action.text.title,content: action.text.content}, ...state];
    case COMPLETE_TODO:
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
}
export default todos;

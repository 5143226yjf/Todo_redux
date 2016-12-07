/**
 * Created by yjf on 16-12-6.
 */
'use strict';
import {createStore} from 'redux';
import todoApp from '../reducers/index';


export default (initialState)=>{
  const store =createStore(todoApp,initialState);
  return store;
}


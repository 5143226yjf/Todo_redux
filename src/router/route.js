/**
 * Created by yjf on 16-12-6.
 */
import React,{Component} from 'react';
import {Router, Route,hashHistory, IndexRoute} from 'react-router';

import App from '../components/Main';
import Login from '../components/auth/login';
import Home from '../components/home';
import UserCenter from '../components/home/userCenter';
import TodoList from '../container/todoList.container';
import TodoOperate from '../container/todoOperate.container';

const router=()=> {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="login" component={Login}/>
        <Route path="home" component={Home}>
          <IndexRoute component={UserCenter}/>
          <Route path="todoList" component={TodoList}/>
          <Route path="todoOperate" component={TodoOperate}/>
        </Route>
      </Route>
    </Router>
  );
};
export default router;

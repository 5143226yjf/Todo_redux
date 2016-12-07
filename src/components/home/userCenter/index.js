/**
 * Created by yjf on 16-12-7.
 */
import React,{Component} from 'react';
import {Link} from 'react-router';
import Nav from '../../nav';
import './index';

class UserCenter extends Component{
  render(){
    return(
      <div className="user-center">
        <Nav to="login" title="用户中心"/>
        <div className="user-content">
          <Link to="/home/todoOperate">添加todo</Link>
          <Link to="/home/todoList">todo列表</Link>
        </div>
      </div>
    );
  }
}
export default UserCenter;

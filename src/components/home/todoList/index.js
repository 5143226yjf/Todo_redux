/**
 * Created by yjf on 16-12-6.
 */
import React,{Component} from 'react';
import Nav from '../../nav';
import './index.styl';


class TodoList extends Component{
  render(){
    let {todos,actions}= this.props;
    todos=todos.map((todo,index)=>{
      return(
        <li key={index} id={index}>
          <div className="time">{todo.time}</div>
          <div className="title">{todo.title}</div>
          <div className="content">内容
            <div className="show-content">{todo.content}</div>
          </div>
          <button onClick={()=>{actions.completeTodo(index)}}>完成</button>
        </li>);
    });
    return(
      <div className="todo-list">
        <Nav to="home" title="todo列表"/>
        <div className="todo-content">
          <ul>
            {todos}
          </ul>
        </div>
        <div className="clear">
          <button onClick={()=>actions.deleteTodo()}>清空</button>
        </div>
      </div>
    );
  }
}
export default TodoList;

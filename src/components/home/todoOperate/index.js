/**
 * Created by yjf on 16-12-6.
 */
import React,{Component} from 'react';
import Nav from '../../nav';
import './index.styl';

class TodoOperate extends Component{
  constructor(props){
    super(props);
    this.handleAdd=this.handleAdd.bind(this);
    this.handleCancel=this.handleCancel.bind(this);
  }

  handleAdd(e){
    e.preventDefault();
    if(this.refs.time!=''&&this.refs.todoTitle!='') {
      let content = {content: this.refs.todoTitle.value, isComplete: '0'};
      console.log(content,'cal')
      this.props.actions.addTodo(content);
    }
  }
  handleCancel(e){
    e.preventDefault();
    this.refs.time.value='';
    this.refs.todoTitle.value='';
    this.refs.todoContent.value='';
  }
  render(){
    return(
      <div className="todo-operate">
        <Nav to="home" title="添加todo"/>
        <div className="operate-content">
          <form>
            <div className="form-item">
              <label>时间：</label>
              <input type="text" ref="time"/>
            </div>
            <div className="form-item">
              <label>标题：</label>
              <input type="text" ref="todoTitle"/>
            </div>
            <div className="form-item">
              <label>内容：</label>
              <textarea type="text" ref="todoContent"/>
            </div>
          </form>
          <div className="operate-item">
            <div className="add-todo" style={{float:'left',width:'50px',height:'32px'}}>
              <button onClick={this.handleAdd}>添加</button>
            </div>
            <div className="cancel" style={{float:'right',width:'50px',height:'32px'}}>
              <button onClick={this.handleCancel}>取消</button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default TodoOperate;

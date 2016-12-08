/**
 * Created by yjf on 16-12-6.
 */
import React,{Component} from 'react';
import Nav from '../../nav';
import ShowMsg from '../../showMsg';
import date from '../../../until/regex';
import './index.styl';

class TodoOperate extends Component{
  constructor(props){
    super(props);
    this.state={
      isMsg:false,
      message:''
    };
    this.handleAdd=this.handleAdd.bind(this);
    this.handleCancel=this.handleCancel.bind(this);
  }

  handleAdd(e){
    e.preventDefault();
    let time = this.refs.time.value;
    let title = this.refs.todoTitle.value;
    let content = this.refs.todoContent.value;
    if(time==''){
      this.setState({isMsg:true,message:"时间不能为空"});
      setTimeout(()=>{this.setState({isMsg:false})},1500);
    }
    else if(title==''){
      this.setState({isMsg:true,message:"标题不能为空"});
      setTimeout(()=>{this.setState({isMsg:false})},1500);
    }
    else if(content==''){
      this.setState({isMsg:true,message:"内容不能为空"});
      setTimeout(()=>{this.setState({isMsg:false})},1500);
    }
    else if(!date.test(time)){
      this.setState({isMsg:true,message:"时间格式不对"});
      setTimeout(()=>{this.setState({isMsg:false})},1500);
    }
    else{
      let text = {time:time,title:title,content: content};
      this.props.actions.addTodo(text);
      this.setState({isMsg:true,message:"添加成功"});
      setTimeout(()=>{this.setState({isMsg:false})},1500);
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
        <ShowMsg isMsg={this.state.isMsg} message={this.state.message}/>
      </div>

    );
  }
}
export default TodoOperate;

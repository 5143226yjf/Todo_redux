/**
 * Created by yjf on 16-12-6.
 */
import React,{Component} from 'react';
import Nav from '../nav';
import ShowMsg from '../showMsg';
import goto from '../../until/goto';
import headImg from '../../images/headPicture.jpg';
import './index.styl';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      isMsg:false,
      message:''
    };
    this.handleLogin=this.handleLogin.bind(this);
  }
  handleLogin(e){
    e.preventDefault();
    let name=this.refs.name.value;
    if(name==""){
      console.log("用户名不能为空");
      this.setState({isMsg:true,message:"用户名不能为空"});
    }
    else{
      this.props.actions.loginTodo(name);
      this.setState({isMsg:true,message:"登录成功"});
      setTimeout(()=>{goto('/home')},1500);
    }
  }
  render(){
    return(
      <div className="login">
        <Nav title="登录"/>
        <div className="login-content">
          <div className="head-img">
            <img src={headImg}/>
          </div>
          <form>
            <div className="form-item">
              <input placeholder="请输入用户名" type="text" ref="name"/>
            </div>
            <div className="form-item">
              <button onClick={this.handleLogin}>登录</button>
            </div>
          </form>
        </div>
        <ShowMsg isMsg={this.state.isMsg} message={this.state.message}/>
      </div>
    );
  }
}
export default Login;

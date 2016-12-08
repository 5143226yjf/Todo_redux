/**
 * Created by yjf on 16-12-7.
 */
import React, {Component} from 'react';
import back from '../../images/back .png';
import goto from '../../until/goto';
import './index.styl';

class Nav extends Component{
  constructor(props){
    super(props);
    this._handleClick=this._handleClick.bind(this);
  }
  _handleClick(){
    if(this.props.to==="login"){
      goto('/login');
    }
    else if(this.props.to==="home"){
      goto("/home");
    }
  }
  render(){
    return(
      <div className="navigation">
        <nav>
          <div onClick={this._handleClick} className="top-left" style={{display:this.props.to?"block":"none"}}>
            <img src={back}/>
            <div className="arrow">返回</div>
          </div>
          <div className="top-name">{this.props.title}</div>
        </nav>
      </div>
    );
  }
}

export default Nav;

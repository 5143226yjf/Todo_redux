/**
 * Created by yjf on 16-12-8.
 */
import React ,{Component} from 'react';
import './index.styl';

class ShowMsg extends Component{
  constructor(props){
    super(props);
    /*this.showMsg=this.showMsg.bind(this);
    this.timer = null*/
  }
 /* showMsg(){
    clearTimeout(this.timer);
    if(this.props.isMsg==true){
      this.timer = setTimeout(()=> {
        this.props.isMsg=false;
      }, 1500)
    }
  }*/
  render(){
    return(
      <div className="showMsg" style={{display:this.props.isMsg?"block":"none"}}>
        {this.props.message}
      </div>
    );
  }
}
export default ShowMsg;

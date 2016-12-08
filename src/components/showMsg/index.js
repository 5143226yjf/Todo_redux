/**
 * Created by yjf on 16-12-8.
 */
import React ,{Component} from 'react';
import './index.styl';

class ShowMsg extends Component{
  render(){
    return(
      <div className="showMsg" style={{display:this.props.isMsg?"block":"none"}}>
        {this.props.message}
      </div>
    );
  }
}
export default ShowMsg;

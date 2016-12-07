/**
 * Created by yjf on 16-12-6.
 */
import React,{Component} from 'react';
import './index.styl';

class Home extends Component{
  render(){
    return(
      <div>
        {this.props.children || Home}
      </div>
    );
  }
}
export default Home;

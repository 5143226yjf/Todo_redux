import React,{Component} from 'react';
import './index.styl';

class AppComponent extends Component {
  render(){
    return(
      <div className="todo">
        {this.props.children}
      </div>
    );
  }

}
export default AppComponent;

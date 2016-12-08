/**
 * Created by yjf on 16-12-8.
 */
import Login from '../components/auth/login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginTodo} from '../actions/index';

const mapStateToProps =(state)=>{
  return {
    name:state.name
  }
};

const mapDispatchToProps = (dispatch)=>{
  const actions={
    loginTodo
  };

  const actionMap={actions:bindActionCreators(actions,dispatch)};

  return actionMap;
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);

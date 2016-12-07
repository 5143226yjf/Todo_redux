/**
 * Created by yjf on 16-12-6.
 */
import TodoOperate from '../components/home/todoOperate';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo} from '../actions/index';

const mapStateToProps=(state)=>{
  return {
    todos:state.todos
  }
};

const mapDispatchToProps=(dispatch)=>{
  const actions={
    addTodo
  };
  const actionMap={actions:bindActionCreators(actions,dispatch)};

  return actionMap;
};

export default connect(mapStateToProps,mapDispatchToProps)(TodoOperate);

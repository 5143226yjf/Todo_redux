/**
 * Created by yjf on 16-12-6.
 */
import TodoList from '../components/home/todoList';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {completeTodo,deleteTodo} from '../actions/index';

const mapStateToProps=(state)=>{
  return {
    todos:state.todos
  }
};

const mapDispatchToProps=(dispatch)=>{
  const actions={
    completeTodo,
    deleteTodo
  };
  const actionMap={actions:bindActionCreators(actions,dispatch)};

  return actionMap;
};

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);


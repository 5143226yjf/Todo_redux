/**
 * Created by yjf on 16-12-8.
 */
import UserCenter from '../components/home/userCenter';
import {connect} from 'react-redux'

const mapStateToProps = (state)=> {
  return {
    names:state.login
  }
};
export default connect(mapStateToProps)(UserCenter)

/**
 * Created by yjf on 16-12-7.
 */
import {hashHistory} from 'react-router';
export default  function goto(path){
  if(path){
    hashHistory.push(path);
  }
  else{
    throw new Error(' cannot find path!');
  }
};

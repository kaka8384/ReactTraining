import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Notification extends Component {
    render () {
      // TODO
      var count=getNotificationsCount()
      var isExistsData=count>0?true:false
      return(
          <div>
          {isExistsData?<span>有({count})条未读消息</span>:<span>没有未读消息</span>}
          </div>
      )
    }
  }
  
  function getNotificationsCount()
  {
      return 0;
  }
  
  ReactDOM.render(<Notification/>,document.getElementById('root'))
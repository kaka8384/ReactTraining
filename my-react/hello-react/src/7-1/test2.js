import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Content extends Component {
    render () {
      // TODO
      const title=<h1 calssName='title'>ScriptOJ</h1>
      const page=<div calssName='content'>{title}</div>
      return(
        page
      )
    }
  }

  ReactDOM.render(<Content/>,document.getElementById('root'))
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class House extends Component {
    // TODO
    render(){
        return(<div>
            <Room/>
            <Bathroom/>      
        </div>)
    }
  }
  
  class Room extends Component {
    // TODO
    render(){
        return(<div>
            This is a Room
            <Man/>
            <Dog/>    
            <Dog/>     
        </div>)
    }
  }
  
  class Bathroom extends Component {
    // TODO
    render(){
        return(<div>
            This is a Bathroom    
        </div>)
    }
  }
  
  class Man extends Component {
    // TODO
    render(){
        return(<div>
            This is a Man    
        </div>)
    }
  }
  
  class Dog extends Component {
    // TODO
    render(){
        return(<div>
            This is a Dog    
        </div>)
    }
  }

  ReactDOM.render(<House/>,document.getElementById('root'))
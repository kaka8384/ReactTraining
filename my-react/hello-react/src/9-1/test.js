import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Dog extends Component {
    bark () {
      console.log('bark')
    }
    
    run () {
      console.log('run')
    }

    handleClick(){
        this.bark();
        this.run();
      }
    
    render () {
        //以下3种方式均可
        return (<div onClick = {() => {this.bark(); this.run()}}>DOG</div>)
     // return (<div onClick={()=>{this.handleClick()}}>DOG</div>)  //写法一 函数调用方式
      // return (<div onClick = {this.handleClick.bind(this)}>DOG</div>)  写法二 函数声明方式
    }
  }
 
  

ReactDOM.render(<Dog/>,document.getElementById('root'))
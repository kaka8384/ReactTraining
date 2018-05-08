import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Dog extends Component {
    constructor () {
        super()
        this.state = { isRunning: false,isBarking:false }
      }

    bark () {
        this.setState(
            {isBarking:true}
        )
        setTimeout(()=>this.setState( 
        ),20)
    }
    
    run () {
        this.setState({
            isRunning:true
        })
        setTimeout(()=>this.setState( 
            {isRunning:false}
        ),20)
    }

    handleClick(){
        this.bark();
        this.run();
      }
    
    render () {
        console.log("isBarking："+this.state.isBarking)
        //以下3种方式均可
        return (<div onClick = {() => {this.handleClick();}}>DOG</div>)
     // return (<div onClick={()=>{this.handleClick()}}>DOG</div>)  //写法一 函数调用方式
      // return (<div onClick = {this.handleClick.bind(this)}>DOG</div>)  写法二 函数声明方式
 
    }
  }
 
  

ReactDOM.render(<Dog/>,document.getElementById('root'))
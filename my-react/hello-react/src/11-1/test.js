import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Computer extends Component {
    constructor () {
        super()
        this.state = {
            status : 'off'
        }
      }

      computerOnpenOrClose()
      {
            this.setState({
                status:this.state.status==='on'?'off':'on'
            })
      }

    render () {
      return (
        <div>
          <button onClick={()=>{this.computerOnpenOrClose();}}>开关</button>
          <Screen showContent={this.state.status==='on'?'显示器亮了':'显示器关了'}/>
        </div>
      )
    }
  }
  
  class Screen extends Component {

    static defaultProps = {
        showContent : '无内容'
      }

    render () {
      return (
        <div className='screen'>{this.props.showContent}</div>
      )
    }
  }
 
  

ReactDOM.render(<Computer/>,document.getElementById('root'))
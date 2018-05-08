import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './22-1/test.css'

class BlackBorderContainer extends Component {
    /* TODO */
    render(){
        return (
          <div>{this.props.children.map((el)=>{
          return (
          <div className='blackBorder'>{el}</div>
          )
          })}
        </div>
      )
    }
  }
 
ReactDOM.render(<BlackBorderContainer>
      <div className='name'>My Name：Lucy</div>
        <p className='age'>
            My Age：<span>12</span>
        </p>
</BlackBorderContainer>,document.getElementById('root'))
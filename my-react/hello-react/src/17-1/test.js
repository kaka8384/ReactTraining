import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Input extends Component {
    // constructor()
    // {
    //     super()
    //     this.state = {
    //       calcValue: 0
    //     }
    // }

    changeInput(event)
    {
        if(this.props.onInput)
        {
            this.props.onInput(event.target.value)
        }
      //   this.setState({
      //     calcValue:event.target.value
      // })
    }

    render () {
      return (
        <div>
          <input type='number'  onChange={this.changeInput.bind(this)} />
        </div>
      )
    }
  }
  
  class PercentageShower extends Component {
    static defaultProps = {
        showValue: ""
      }

    render () {
      return (
        <div>{(Math.round(this.props.showValue * 10000)/100).toFixed(2)}%</div>
      )
    }
  }
  
  class PercentageApp extends Component {
    constructor()
    {
        super()
        this.state = {
          calcValue: 0
        }
    }

    //把子组件Input中的输入值放到state中
    handlerclacValue(inputValue)
    {
        this.setState({
            calcValue:inputValue
        })
    }

    render () {
      return (
        <div>
            <Input onInput={this.handlerclacValue.bind(this)}/>  {/*通过props传给Input组件调用handlerclacValue方法*/}
            <PercentageShower showValue={this.state.calcValue}/>
        </div>
      )
    }
  }
 
ReactDOM.render(<PercentageApp/>,document.getElementById('root'))
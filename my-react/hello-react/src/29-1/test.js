import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types'

//此为函数式组件
const makeProvider = (dataParam) => (WrappedComponent) =>{
    return (class NewComponent  extends Component {

        static childContextTypes = {
            data : PropTypes.any
        }   

      constructor ()
      {
          super()
          this.state = {data :dataParam}
      }

      getChildContext () {
        return { data: this.state.data }
      }
  
  
        render () {
            return( <WrappedComponent {...this.props}/>)
        }
    })
  }

  class Post extends Component{
    static contextTypes = {
        data: PropTypes.any
      }

    render(){
        return(<div>
            <h1>{this.context.data}</h1>
        </div>)
    }

    Post = makeProvider({name:'Jerry'})(Post)
  }


  ReactDOM.render(<Post/>,document.getElementById('root'))
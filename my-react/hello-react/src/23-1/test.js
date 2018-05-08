import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//此为函数式组件
const getDefaultStyledPost = (defaultStyle) => {
  return (class Post extends Component {
    render () {
      return (
        <p style={this.props.style ? Object.assign(defaultStyle,this.props.style) : defaultStyle}>
        my name is zhanghao
        </p>
      )
    }
  })
}

const showContent = getDefaultStyledPost({ color: 'red' })

let style1={style:{ color: 'blue', fontSize: '13px' }}
let style2={style:{fontSize: '12px' }}

let PostList=React.createElement(showContent,style2)  //函数式组件的调用方式

ReactDOM.render(PostList,document.getElementById('root'))
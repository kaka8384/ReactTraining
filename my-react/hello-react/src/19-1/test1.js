import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// getPostData 已经可以直接使用
// 小提示：本系统可以直接 async/await
//非异步async版
class Post extends Component {
    constructor()
    {
        super()
        this.state = {
            content: "数据加载中..."
        }
    }

    getContent()
    {
        this.setState({
            content:"数据加载中..."
        })
        this.componentWillMount()  //调用函数前面加this
    }

    componentWillMount()
    {
      getPostData().then((postContent) => {
        // ...
        this.setState({
            content:postContent
        })
      })
    }

    render () {
      return (
        <div>
          <div className='post-content'>{this.state.content}</div>
          <button onClick={this.getContent.bind(this)}>刷新</button>
        </div>
      )
    }
  }
 
ReactDOM.render(<Post/>,document.getElementById('root'))
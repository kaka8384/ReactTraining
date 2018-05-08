import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// getPostData 已经可以直接使用
// 小提示：本系统可以直接 async/await
//异步async版
class Post extends Component {
    constructor()
    {
        super()
        this.state = {
            content: "数据加载中..."
        }
    }

    async getContent()
    {
        this.setState({
            content:"数据加载中..."
        })
        const content = await getPostData()
        this.setState({
            content:content
        })
    }

    componentWillMount()
    {
        this.getContent()
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
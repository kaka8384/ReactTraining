import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//此为函数式组件
const loadAndRefresh = (url) => (WrappedComponent) =>{
  return (class NewComponent  extends Component {
    constructor ()
    {
        super()
        this.state = { content : '数据加载中...' }
    }

    componentWillMount () {
        this._loadContent()
      }

      refresh()
      {
        this._loadContent()
      }

      _loadContent()
      {
        this.setState({
            content:'数据加载中...' 
        })
        getData(url).then((postContent) => {
            this.setState({
                content:postContent
            })
          })
      }

      render () {
          return( <WrappedComponent content={this.state.content} refresh={this.refresh.bind(this)} {...this.props}/>)
      }
  })
}
export default loadAndRefresh


//ReactDOM.render(PostList,document.getElementById('root'))
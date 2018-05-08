import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Post extends Component {
    static defaultProps = {
        content  : ""
      }

      print()
      {
        console.log(this.p.offsetHeight)
      }

    render () {
      return (<p ref={(p)=>this.p=p} onClick={this.print.bind(this)}>{this.props.content}</p>)
    }
  }

  let inputContent="子代遗传物质一半来自父亲，另一半来自母亲，而基因又有显性和隐性之分，因此后代面部特征与一方面受双方基因影响。另一方面还与基因在控制性状强弱及相互影响有关。"
 
ReactDOM.render(<Post content={inputContent}/>,document.getElementById('root'))
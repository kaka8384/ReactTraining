import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
  ]

class Lesson extends Component {
    /* TODO */
    static defaultProps = {
        lesson  : []
      }

      printTitle(lesson,i)
        {
            console.log(i+'-'+lesson.title)
        }

    render () {
        return (
          <div>
            <h1>{this.props.lesson.title}</h1>
            <p>{this.props.lesson.description}</p>
          </div>

          
        )
      }
  }
  
  class LessonsList extends Component {
    /* TODO */
    render () {
        return(
            <div>
              {
                  lessons.map((lesson,i)=><Lesson key={i} lesson={lesson} onClick={()=>{this.printTitle(lesson,i)}}/>)
              }  
            </div>
        )
    }
  }
 
  

ReactDOM.render(<LessonsList/>,document.getElementById('root'))
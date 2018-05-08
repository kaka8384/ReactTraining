import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

function renderContent(content)
{
  ReactDOM.render(<h1>{content}</h1>,document.getElementById('root'));
}
renderContent('Hello World');
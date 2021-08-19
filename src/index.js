import React from 'react';
import ReactDom from 'react-dom';
import Login,{Heading,Body} from './App';
import './CSS/Home.css';

ReactDom.render(
  <div>
    <Heading name1="Student" name2="Portal" />
    <Login />            
    <Body />
  </div>,document.getElementById('root'));
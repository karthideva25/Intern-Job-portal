import React from 'react';
import ReactDom from 'react-dom';
import Index,{Heading} from './App';
import './CSS/Home.css';

ReactDom.render(<div>
                  <Heading name1="Intern/Job" name2="Portal" />
                  <Index />
                </div>,document.getElementById('root'));
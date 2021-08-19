import React from 'react';
import './CSS/Home.css';

function Index(){
    return(
        <div className="body">
            <h1 className="are">Are you </h1>
            <button className="btn student">Student</button>
            <button className="btn recruiter">Recruiter</button>
        </div>
    );
}

function Heading(props){
    return(
        <div className="top">
            <h1 className="intern">{props.name1}</h1>
            <h1 className="portal">{props.name2}</h1>
        </div>
    );
}

export default Index;
export {Heading};
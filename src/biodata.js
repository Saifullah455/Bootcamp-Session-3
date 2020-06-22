import React from 'react';

function Biodata (props){
   return(
    <div>
        <h2>STUDENT'S BIODATA</h2>
        <div>Name: {props.name}</div>
        <div>Class: {props.class}</div> 
        <div>CGPA: {props.cgpa}</div>
        <div>Contact no: {props.contact}</div>
    </div>
   );
}

export default Biodata
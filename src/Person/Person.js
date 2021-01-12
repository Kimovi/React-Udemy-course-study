// import { render } from '@testing-library/react';
import React from 'react';
import './Person.css';

// const person = (props) => {
//     return (
//         <div>
//             <p>I'm a {props.name} and I am {props.age} years old</p>
//             <p>{props.children}</p>
//         </div>
//     )

// };

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )

};

export default Person;
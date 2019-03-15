import React from 'react';

// When creating components, you have the choice between two different ways:
// 1. Functional Components     => const com => { return <div>some JSX</div> }
// 2. Class-based Components    => class Cmp extends Component { render () { return <div>some JSX</div> } }

const person = (props) => {
    // return <p>I'm a Person! and I am {Math.floor(Math.random() * 30)} years old!</p>
    // without curly braces 'Math.floor(Math.random() * 30)' compiles like a text
    // We need curly braces for dynamic content

    return <p>I'm {props.name}! and I am {props.age} years old!</p>
};

export default person;
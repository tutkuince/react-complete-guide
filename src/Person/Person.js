import React from 'react';

// When creating components, you have the choice between two different ways:
// 1. Functional Components     => const com => { return <div>some JSX</div> }
// 2. Class-based Components    => class Cmp extends Component { render () { return <div>some JSX</div> } }

const person = () => {
    return <p>I'm a Person!</p>
};

export default person;
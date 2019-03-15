import React from 'react';

// When creating components, you have the choice between two different ways:
// 1. Functional Components     => const com => { return <div>some JSX</div> }
// 2. Class-based Components    => class Cmp extends Component { render () { return <div>some JSX</div> } }


// props  and state  are CORE concepts of React.
// Actually, only changes in props  and/ or state  trigger React to re-render your components and
// potentially update the DOM in the browser
// (a detailed look at how React checks whether to really touch the real DOM is provided in section 6).

// Props
// props  allow you to pass data from a parent (wrapping) component to a child (embedded) component.

// Example:
//
// AllPosts Component:
//     const posts = () => {
//         return (
//             <div>
//                 <Post title="My first Post" />
//             </div>
//         );
//     }
// Here, title  is the custom property (prop ) set up on the custom Post  component.
// We basically replicate the default HTML attribute behavior
// we already know (e.g. <input type="text">  informs the browser about how to handle that input).

// Post Component:
// The Post  component receives the props  argument. You can of course name this argument whatever you want -
// it's your function definition, React doesn't care! But React will pass one argument to your component function =>
// An object, which contains all properties you set up on <Post ... /> .
//
// {props.title}  then dynamically outputs the title  property of the props  object -
// which is available since we set the title  property inside AllPosts  component (see above).

// State
//
// Whilst props allow you to pass data down the component tree (and hence trigger an UI update),
// state is used to change the component, well, state from within. Changes to state also trigger an UI update.

// Example:
//
// NewPost Component:
//     class NewPost extends Component { // state can only be accessed in class-based components!
//         state = {
//             counter: 1
//         };
//
//         render () { // Needs to be implemented in class-based components! Needs to return some JSX!
//             return (
//                 <div>{this.state.counter}</div>
//             );
//         }
//     }

// Here, the NewPost  component contains state . Only class-based components can define and use state .
// You can of course pass the state  down to functional components, but these then can't directly edit it.
//
// state  simply is a property of the component class, you have to call it state  though - the name is not optional.
// You can then access it via this.state  in your class JSX code (which you return in the required render()  method).
//
// Whenever state  changes (taught over the next lectures), the component will re-render and reflect the new state.
// The difference to props  is, that this happens within one and the same component -
// you don't receive new data (props ) from outside!
const person = (props) => {
    // return <p>I'm a Person! and I am {Math.floor(Math.random() * 30)} years old!</p>
    // without curly braces 'Math.floor(Math.random() * 30)' compiles like a text
    // We need curly braces for dynamic content

    // return <p>I'm {props.name}! and I am {props.age} years old!</p>

    return (
        <div>
            <p>I'm {props.name}! and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';   // .js added automatically to Person

class App extends Component {
    render() {
        // This one is JSX Code
        return (
            // JSX expression mush have one root element
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <Person/>
            </div>
        );
        // JSX Code compile to this code.
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
    }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';   // .js added automatically to Person

class App extends Component {
    // props are set and paste from outside with state (name, age, etc.)
    // state manage inside the component
    // it is just available in that 'extends Component' (class-base-component react component)
    state = {
        persons: [
            {name: 'Tutku', age: 30},
            {name: 'Emin', age: 29},
            {name: 'Musa', age: 33},
            {name: 'Utku', age: 21}
        ]
    }


    render() {
        // This one is JSX Code
        return (
            // JSX expression mush have one root element
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button>Switch Name</button>
                {/*<Person name="Tutku" age="30" />*/}
                {/*<Person name="Emin" age="29" />*/}
                {/*<Person name="Musa" age="33" />*/}
                {/*<Person name="Utku" age="21">My hobbies: Racing</Person>*/}

                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
                <Person name={this.state.persons[3].name} age={this.state.persons[3].age}>My hobbies: Racing</Person>
            </div>
        );
        // JSX Code compile to this code.
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
    }
}

export default App;

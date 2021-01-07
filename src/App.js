import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi</h1>
//     </div>
//   );
// }
//
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app </h1>
        <p>This is working 1</p>
        <Person />
      </div>
    );
    // return React.createElement('div',  {className:'App'}, React.createElement('h1', null, 'Hi I am reactttttt'))
  }
}

export default App;

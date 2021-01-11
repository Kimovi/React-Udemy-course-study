// import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import person from './Person/Person';


// function App() {
//   return (
//     <div className="App">
//       <h1>Hi</h1>
//     </div>
//   );
// }
//
// const App = props =>  {
//   const [ personsState, setPersonsState ] = useState({
//         persons: [
//           { name: 'Max', age: 28},
//           { name: 'Manu', age: 23},
//           { name: 'Ste', age: 20}
//         ],
//         otherState: 'some other value'
//       });


// const [otherState, setOtherState] = useState('djkfljdlkjkls');

// console.log(personsState, otherState);


//   const switchNameHandler = () => {
//     setPersonsState(
//       {persons: [
//       { name: 'Maxidifjidji', age: 28},
//       { name: 'Manu', age: 23},
//       { name: 'Ste', age: 230}
//     ],
//     otherState: personsState.otherState
//   })
// }

//   return (
//       <div className="App">
//         <h1>Hi, I am react app </h1>
//         <p>This is working 1</p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing </Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//       </div>
//     );
// };

//   export default App;

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name : "Manu", age : 29 },
      { name : "Step", age : 26 }
    ],
    otherState: "some other value"
  }
  // event handler
  switchNameHandler = (newName) => {
    // I want to add state
    // console.log("Was clicked!")
    // this this would refer sate with ES6 function
    // this.state.persons[0].name = "Maximailian"
    this.setState({ persons : [
      { name: newName, age: 28 },
      { name : "Manu", age : 29 },
      { name : "Step", age : 30 }
    ]})
  }

  nameChangeHandler = (event) =>{
    console.log(event.target.value);
    this.setState({ 
      persons : [
        { name:  "Max", age: 28 },
        { name : event.target.value , age : 29 },
        { name : "Step", age : 26 }
    ]})
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className = "App">
         <h1> Hi I am a react app</h1> 
         <h2> Reactt</h2>
        <button 
          style={style}
          onClick = {() => this.switchNameHandler('dkdkkdd')} >Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age ={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age ={this.state.persons[1].age} click = {this.switchNameHandler.bind(this, 'Lina')}
          changed={this.nameChangeHandler}>My Hobby : racing </Person> 
        <Person 
          name={this.state.persons[2].name} 
          age ={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
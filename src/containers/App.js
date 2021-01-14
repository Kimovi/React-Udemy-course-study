// import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
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

// class App extends Component {
//   state = {
//     persons: [
//       { name: "Max", age: 28 },
//       { name : "Manu", age : 29 },
//       { name : "Step", age : 26 }
//     ],
//     otherState: "some other value",
//     showPersons: false
//   }

//   switchNameHandler = (newName) => {
//     // this.state.persons[0].name = "Maximailian"
//     this.setState({ persons : [
//       { name: newName, age: 28 },
//       { name : "Manu", age : 29 },
//       { name : "Step", age : 30 }
//     ]})
//   }

//   nameChangeHandler = (event) =>{
//     console.log(event.target.value);
//     this.setState({ 
//       persons : [
//         { name:  "Max", age: 28 },
//         { name : event.target.value , age : 29 },
//         { name : "Step", age : 26 }
//     ]})
//   }

//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons: !doesShow});
//   }

//   render() {
//     const style = {
//       backgroundColor: 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer'
//     };

//     let persons = null; 

//     if(this.state.showPersons){
//       persons = (
//         <div>
//               <Person 
//                 name={this.state.persons[0].name} 
//                 age ={this.state.persons[0].age}/>
//               <Person 
//                 name={this.state.persons[1].name} 
//                 age ={this.state.persons[1].age} click = {this.switchNameHandler.bind(this, 'Lina')}
//                 changed={this.nameChangeHandler}>My Hobby : racing </Person> 
//               <Person 
//                 name={this.state.persons[2].name} 
//                 age ={this.state.persons[2].age}/>
//             </div> 
//       );
//     }

//     return (
//       <div className = "App">
//          <h1> Hi I am a react app</h1> 
//          <h2> Reactt</h2>
//         <button 
//           style={style}
//           onClick = {this.togglePersonsHandler} >Toggle</button>
//           {persons}
//       </div>
//     );
//   }
// }
// export default App;

// { 
//             this.state.showPersons === true ? : null}


class App extends Component {
  state = {
    persons: [
      { id: 'a', name: "Max", age: 28 },
      { id: 'd', name : "Manu", age : 29 },
      { id: 's', name : "Step", age : 26 }
    ],
    otherState: "some other value",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = "Maximailian"
    this.setState({ persons : [
      { name: newName, age: 28 },
      { name : "Manu", age : 29 },
      { name : "Step", age : 30 }
    ]})
  }

  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]); // alt ways to do the same code above
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // console.log(event.target.value);
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; 
    // Above code // you can use either ways to copy the persons array 

    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null; 

    if(this.state.showPersons){
      persons = (
        <div>
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
        </div> 
      );
    }

    return (
      <div className = "App">
         <h1> Hi I am a react app</h1> 
         <h2> Reactt</h2>
        <button 
          style={style}
          onClick = {this.togglePersonsHandler} >Toggle</button>
          {persons}
      </div>
    );
  }
}
export default App;
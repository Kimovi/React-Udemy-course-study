import React from 'react';
import Person from './Person/Person';
import Radium from 'radium';

const persons = (props) => props.persons.map((person, index) => {
  const style = {
    '@media(min-width: 500px)':{
      width: '450px'
    }
  };

  return <Person  style={style}
  click={() => props.clicked(index)}
  name={person.name} 
  age={person.age} 
  key={person.id}
  changed={(event) => props.changed(event, person.id)} />
});

export default Radium(persons);
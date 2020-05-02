import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character";
import styled from "styled-components";
import image from "./images/rm-bg.jpg";

const AppDiv = styled.div`
  background: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
`

const App = () => {
  // I will set my state here.
  const [characterState, setCharacterState] = useState([]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // Now setting my state to the r&m api
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
    .then(response => {
      setCharacterState(response.data.results)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  console.log(characterState);
  return (
    <AppDiv className="App">
      <h1 className="Header">Characters</h1>
      {characterState.map((person) => {
        return <Character 
        id={Date.now()} 
        name={person.name} 
        status={person.status}
        species={person.species}
        type={person.type}
        gender={person.gender}
        location={person.location.name}
        />
      })}
    </AppDiv>
  );
}

export default App;

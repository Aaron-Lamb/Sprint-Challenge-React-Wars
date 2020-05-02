import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character";
import styled from "styled-components";

const CharacterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    <div className="App">
    <h1 className="Header">Characters</h1>
    <CharacterDiv>
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
      </CharacterDiv>
    </div>
  );
}

export default App;

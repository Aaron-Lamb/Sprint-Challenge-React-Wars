import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "ax"

const App = () => {
  // I noticed that there are a total of nine pages of characters, and 
  // decided to write state for each of them, as I have no immediate
  // thoughts on how to do it without this.

  // Page one of state
  const [charactersOne, setCharactersOne] = ([]);

  // Page Two of state
  const [ charactersTwo, setCharactersTwo] = ([]);

  // Page three of state
  const [ charactersThree, setCharactersThree] = ([]);

  // Page four
  const [ charactersFour, setCharactersFour] = ([]);

  // Page five
  const [ charactersFive, setCharactersFive] = ([]);

  // Page six
  const [ charactersSix, setCharactersSix] = ([]);

  // Page seven
  const [ charactersSeven, setCharactersSeven] = ([]);

  // Page eight
  const [ charactersEight, setCharactersEight] = ([]); 

  // Page nine
  const [ charactersNine, setCharactersNine] = ([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // I will also create a subsequent 9 useffects for each page in the API

  // Page One
  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;

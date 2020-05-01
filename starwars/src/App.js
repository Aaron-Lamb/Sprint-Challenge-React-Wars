import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [charactersOne, setCharactersOne] = ([]);
  const [ charactersTwo, setCharactersTwo] = ([]);
  const [ charactersThree, setCharactersThree] = ([]);
  const [ charactersFour, setCharactersFour] = ([]);
  const [ charactersFive, setCharactersFive] = ([]);
  const [ charactersSix, setCharactersSix] = ([]);
  const [ charactersSeven, setCharactersSeven] = ([]);
  const [ charactersEight, setCharactersEight] = ([]); 
  const [ charactersNine, setCharactersNine] = ([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;

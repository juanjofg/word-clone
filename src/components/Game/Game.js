import React from 'react';
import Guesses from './../Guesses';
import GuessInput from './../GuessInput';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleInput = (value) => {
    const nextGuesses = [...guesses];
    nextGuesses.push(value);
    setGuesses(nextGuesses);
  };

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <GuessInput handleInput={handleInput} />
    </>
  );
}

export default Game;

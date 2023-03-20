import React from 'react';
import Guesses from './../Guesses';
import GuessInput from './../GuessInput';
import Banner from '../Banner/Banner';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [showBanner, setShowBanner] = React.useState(false);
  const [type, setType] = React.useState('fail');

  const handleInput = (value) => {
    const nextGuesses = [...guesses];
    nextGuesses.push(value);
    if (value === answer) {
      setType('success');
      setShowBanner(true);
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setType('fail');
      setShowBanner(true);
    }

    setGuesses(nextGuesses);
  };

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <GuessInput handleInput={handleInput} disabled={showBanner} />
      {showBanner && (
        <Banner attempts={guesses.length} answer={answer} type={type} />
      )}
    </>
  );
}

export default Game;

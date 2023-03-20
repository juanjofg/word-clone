import React from 'react';
import Guess from './../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Guesses({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row, rowIdx) => (
        <Guess key={rowIdx} word={guesses[rowIdx]} answer={answer} />
      ))}
    </div>
  );
}

export default Guesses;

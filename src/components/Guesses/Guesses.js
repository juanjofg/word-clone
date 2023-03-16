import React from 'react';
import Guess from './../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row, rowIdx) => (
        <Guess key={rowIdx} word={guesses[rowIdx]} />
      ))}
    </div>
  );
}

export default Guesses;

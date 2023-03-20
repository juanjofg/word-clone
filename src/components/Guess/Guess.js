import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ word, answer }) {
  const letters = word && [...word];
  let result;
  if (word !== undefined) {
    result = checkGuess(word, answer);
  }

  return (
    <p className="guess">
      {range(5).map((cell, idx) => (
        <span
          key={idx}
          className={`cell ${
            result && result.length ? result[idx].status : 'undefined'
          }`}
        >
          {letters ? letters[idx] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

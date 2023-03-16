import React from 'react';
import { range } from '../../utils';

function Guess({ word }) {
  const letters = word && [...word];
  return (
    <p className="guess">
      {range(5).map((cell, idx) => (
        <span key={idx} className="cell">
          {letters && letters.length && letters[idx]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
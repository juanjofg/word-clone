import React from 'react';

function Banner({ attempts, answer, type }) {
  const className = type === 'success' ? 'happy banner' : 'sad banner';
  return (
    <div className={className}>
      {type === 'success' ? (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{attempts} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;

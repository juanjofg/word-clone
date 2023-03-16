import React from 'react';

function GuessInput({ handleInput }) {
  const [word, setWord] = React.useState('');
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleInput(word.toUpperCase());
        setWord('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength="5"
        maxLength="5"
        value={word}
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
    </form>
  );
}

export default GuessInput;

import React from 'react';

function GuessInput({ handleInput }) {
  const [word, setWord] = React.useState('');
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleInput(word);
        setWord('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={word}
        onChange={(e) => {
          setWord(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;

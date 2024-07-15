import React from "react";

function GuessInput({ guess, setGuess }) {
  const handleGuessChange = (e) => {
    const uppercaseValue = e.target.value.toUpperCase();
    setGuess(uppercaseValue);
  };

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          setGuess("");
          console.log(guess);
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          value={guess}
          type="text"
          minLength={5}
          maxLength={5}
          pattern="[A-Za-z]{5}"
          onChange={handleGuessChange}
        />
      </form>
    </>
  );
}

export default GuessInput;

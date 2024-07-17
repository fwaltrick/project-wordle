import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [guess, setGuess] = React.useState("");
  const handleGuessChange = (e) => {
    const uppercaseValue = e.target.value.toUpperCase();
    setGuess(uppercaseValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitGuess(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      {" "}
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        value={guess}
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        onInvalid={(e) =>
          e.target.setCustomValidity("Please enter a 5-letter word")
        }
        onInput={(e) => e.target.setCustomValidity("")}
        onChange={handleGuessChange}
      />
    </form>
  );
}

export default GuessInput;

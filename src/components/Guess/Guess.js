import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  console.log(result);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          className={value ? `cell ${result[num].status}` : `cell`}
          key={num}
        >
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

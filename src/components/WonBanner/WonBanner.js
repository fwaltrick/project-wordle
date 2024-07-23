import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ guesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guesses.length} guesses</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;

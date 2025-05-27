import React, { useState, useEffect } from "react";
import { TriviaCard }from "./TriviaCard";
import { isValidNumber } from "../utils/validators";

export function MathInput() {
  const [value, setValue] = useState("");
  const [trivia, setTrivia] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (value === "") {
      setError("");
      setTrivia("");
      return;
    }

    if (!isValidNumber(value)) {
      setError("Please enter a valid number.");
      setTrivia("");
    } else {
      setError("");
      fetch(`http://numbersapi.com/${value}/math`)
        .then((res) => res.text())
        .then((text) => setTrivia(text))
        .catch(() => setTrivia("Failed to fetch trivia."));
    }
  }, [value]);

  return (
    <div className="input-block">
      <label>Math Trivia:</label>
      <input
        type="text"
        placeholder="e.g. 35"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={error ? "error" : ""}
      />
      {error && <div className="error-message">{error}</div>}
      <TriviaCard text={trivia} />
    </div>
  );
}

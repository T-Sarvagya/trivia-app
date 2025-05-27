import React, { useState } from "react";
import { isValidNumber } from "../utils/validators";

export function MathInput({ setTrivia }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (newValue === "") {
      setError("");
      setTrivia("Please enter a number for Math Trivia");
    } else if (!isValidNumber(newValue)) {
      setError("Please enter a valid number.");
      setTrivia("Please enter a number for Math Trivia");
    } else {
      setError("");
      fetch(`http://numbersapi.com/${newValue}/math`)
        .then((res) => res.text())
        .then((text) => setTrivia(text))
        .catch(() => setTrivia("Failed to fetch trivia."));
    }
  };

  return (
    <div className="input-block">
      <label>Math Trivia:</label>
      <input
        type="text"
        placeholder="e.g. 35"
        value={value}
        onChange={handleChange}
        className={error ? "error" : ""}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

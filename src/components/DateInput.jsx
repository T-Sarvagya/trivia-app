import React, { useState, useEffect } from "react";
import { TriviaCard } from "./TriviaCard";
import { parseDateInput } from "../utils/validators";

export function DateInput() {
  const [value, setValue] = useState("");
  const [trivia, setTrivia] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (value === "") {
      setError("");
      setTrivia("");
      return;
    }

    const dateParts = parseDateInput(value);
    if (!dateParts) {
      setError("Please enter a valid date in MM-DD or YYYY-MM-DD format.");
      setTrivia("");
    } else {
      setError("");
      const [month, day] = dateParts;
      fetch(`http://numbersapi.com/${month}/${day}/date`)
        .then((res) => res.text())
        .then((text) => setTrivia(text))
        .catch(() => setTrivia("Failed to fetch trivia."));
    }
  }, [value]);

  return (
    <div className="input-block">
      <label>Date Trivia:</label>
      <input
        type="text"
        placeholder="e.g. 2-29 or 2000-12-25"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={error ? "error" : ""}
      />
      {error && <div className="error-message">{error}</div>}
      <TriviaCard text={trivia} />
    </div>
  );
}

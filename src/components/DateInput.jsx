import React, { useState } from "react";
import { parseDateInput } from "../utils/validators";

export function DateInput({ setTrivia }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (newValue === "") {
      setError("");
      setTrivia("Please enter date for Date Trivia");
    } else {
      const dateParts = parseDateInput(newValue);
      if (!dateParts) {
        setError("Please enter a valid date in MM-DD or YYYY-MM-DD format.");
        setTrivia("Please enter date for Date Trivia");
      } else {
        setError("");
        const [month, day] = dateParts;
        fetch(`http://numbersapi.com/${month}/${day}/date`)
          .then((res) => res.text())
          .then((text) => setTrivia(text))
          .catch(() => setTrivia("Failed to fetch trivia."));
      }
    }
  };

  return (
    <div className="input-block">
      <label>Date Trivia:</label>
      <input
        type="text"
        placeholder="e.g. 2-29 or 2000-12-25"
        value={value}
        onChange={handleChange}
        className={error ? "error" : ""}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
import React from "react";
import { TriviaCard } from "./TriviaCard";

export function TriviaPanel({ number, date, math }) {
  return (
    <div className="output-section">
      <h2>Trivia Output</h2>
      <TriviaCard text={number} label="Number Trivia" />
      <TriviaCard text={date} label="Date Trivia" />
      <TriviaCard text={math} label="Math Trivia" />
    </div>
  );
}

/*
import React from "react";
import { TriviaCard } from "./TriviaCard";

export function TriviaPanel({ number, date, math }) {
  return (
    <div className="output-section">
      <h2>Trivia Output</h2>
      {number && <TriviaCard text={number} label="Number Trivia" />}
      {date && <TriviaCard text={date} label="Date Trivia" />}
      {math && <TriviaCard text={math} label="Math Trivia" />}
    </div>
  );
} */

import React, { useState } from "react";
import { NumberInput } from "./components/NumberInput";
import { DateInput } from "./components/DateInput";
import { MathInput } from "./components/MathInput";
import { TriviaPanel } from "./components/TriviaPanel";
import "./App.css";

export function App() {
  const [numberTrivia, setNumberTrivia] = useState("Please enter a number for Number Trivia");
  const [dateTrivia, setDateTrivia] = useState("Please enter date for Date Trivia");
  const [mathTrivia, setMathTrivia] = useState("Please enter a number for Math Trivia");

  return (
    <div className="main-layout">
      <div className="left-pane">
        <h2>Trivia Input</h2>
        <NumberInput setTrivia={setNumberTrivia} />
        <DateInput setTrivia={setDateTrivia} />
        <MathInput setTrivia={setMathTrivia} />
      </div>
      <div className="right-pane">
        <TriviaPanel
          number={numberTrivia}
          date={dateTrivia}
          math={mathTrivia}
        />
      </div>
    </div>
  );
}


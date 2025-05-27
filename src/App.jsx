import React, { useState } from "react";
import { NumberInput } from "./components/NumberInput";
import { DateInput } from "./components/DateInput";
import { MathInput } from "./components/MathInput";
import { TriviaPanel } from "./components/TriviaPanel";
import "./App.css";

export function App() {
  const [numberTrivia, setNumberTrivia] = useState("");
  const [dateTrivia, setDateTrivia] = useState("");
  const [mathTrivia, setMathTrivia] = useState("");

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


import React, { useState } from "react";
import { NumberInput } from "./components/NumberInput";
import { DateInput } from "./components/DateInput";
import { MathInput } from "./components/MathInput";
import "./App.css";

export function App() {
  return (
    <div className="container">
      <h1>Trivia Fun Facts</h1>
      <div className="input-section">
        <NumberInput />
        <DateInput />
        <MathInput />
      </div>
    </div>
  );
}



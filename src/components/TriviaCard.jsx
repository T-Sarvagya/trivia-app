import React from "react";

export function TriviaCard({text}) {
    return text ? <div className="trivia-box">{text}</div> : null;
}

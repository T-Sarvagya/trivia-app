import React from "react";

export function TriviaCard({text, label}) {
    return (
        <div className="trivia-box">
            <strong>{label}:</strong>
            <div>{text}</div>
        </div>
    );
}

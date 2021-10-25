import React from "react";
import "../index.css";
const ScoreBoard = ({ score }) => {
  return (
    <div className="score-board">
      <h2>Score : {score}</h2>
    </div>
  );
};

export default ScoreBoard;

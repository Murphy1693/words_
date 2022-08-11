import React, { useState } from "react";
import Timer from "./Timer.jsx";
import Game from "./Game.jsx";
import Button from "react-bootstrap/Button";

const StartGame = (props) => {
  let [gameInSession, setGameInSession] = useState(false);

  let start = function () {
    setGameInSession(true);
  };
  let end = function () {
    setGameInSession(false);
  };

  if (gameInSession) {
    return (
      <Game
        score={props.score}
        setScore={props.setScore}
        handleSubmit={props.handleSubmit}
        gameWords={props.gameWords}
        setGameWords={props.setGameWords}
        addGameWord={props.addGameWord}
        addWrongWord={props.addWrongWord}
        addWord={props.addWord}
        end={end}
      ></Game>
    );
  }

  return (
    <div style={{ textAlign: "center" }} className="start-game">
      <Button
        style={{ boxShadow: "rgb(0 0 0 / 35%) 0px 2px 10px" }}
        variant="warning"
        className="quick-start"
        onClick={() => {
          props.setScore(0);
          start();
        }}
      >
        Quick Start
      </Button>
    </div>
  );
};

export default StartGame;

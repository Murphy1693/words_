import React, { useState, useEffect } from "react";
import Leaderboard from "./Leaderboard.jsx";
import Timer from "./Timer.jsx";
import StartGame from "./StartGame.jsx";
import WordList from "./WordList.jsx";
import WordModal from "./WordModal.jsx";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  let [words, setWords] = useState([]);
  let [modal, setModal] = useState({ open: false, index: 0 });
  let [leaders, setLeaders] = useState([
    { tag: null, count: null, score: null, words: [] },
  ]);
  let [gameWords, setGameWords] = useState([]);
  let addGameWord = function (word) {
    let wordsCopy = [...gameWords];
    wordsCopy.push(word);
    setGameWords(wordsCopy);
  };
  let [score, setScore] = useState(0);

  let updateLeaderboard = function () {
    axios.get("http://localhost:3000/leaderboard").then((response) => {
      console.log(response.data);
      setLeaders(response.data.slice(0, 10));
    });
  };

  let handleSubmit = function (userscoreObject) {
    setGameWords([]);
    setScore(0);
    return axios
      .post("http://localhost:3000/userscore", userscoreObject)
      .then(() => {
        updateLeaderboard();
      })
      .catch();
  };

  useEffect(() => {
    updateLeaderboard();
  }, []);

  let addWord = function (wordObj) {
    let wordsCopy = [...words];
    wordsCopy.push(wordObj);
    setWords(wordsCopy);
  };

  let addWrongWord = function (word) {
    let wordsCopy = [...words];
    wordsCopy.push(word);
    setWords(wordsCopy);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "mediumpurple",
      }}
    >
      <div style={{ width: "60%", textAlign: "center", margin: "auto" }}>
        <h1 className="header">Words!</h1>
        <div style={{ minHeight: "38px" }}>
          <StartGame
            score={score}
            setScore={setScore}
            handleSubmit={handleSubmit}
            gameWords={gameWords}
            setGameWords={setGameWords}
            addGameWord={addGameWord}
            addWrongWord={addWrongWord}
            addWord={addWord}
          ></StartGame>
          {modal.open ? (
            <WordModal
              word={words[modal.index]}
              setModal={setModal}
            ></WordModal>
          ) : (
            <></>
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Leaderboard leaders={leaders}></Leaderboard>
          <WordList setModal={setModal} words={words}></WordList>
        </div>
      </div>
    </div>
  );
};

export default App;

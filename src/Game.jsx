import React, { useState, useEffect } from "react";
import Timer from "./Timer.jsx";
import axios from "axios";
import { API_KEY, API_HOST } from "/config.js";
import ShowEntry from "./ShowEntry.jsx";
import Button from "react-bootstrap/Button";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": API_HOST,
  },
};

const Game = (props) => {
  let [time, setTime] = useState(30);
  let [constraints, setConstraints] = useState({
    start: String.fromCharCode(65 + Math.floor(Math.random() * 26)),
    exactly: Math.floor(Math.random() * 4 + 4),
  });
  let [tag, setTag] = useState("");

  let [entry, setEntry] = useState("");

  let handleEntry = function () {
    console.log(props.score);
    entry = entry.toUpperCase();
    console.log(constraints.exactly, entry.length);
    console.log(entry[0], constraints.start);
    if (constraints.exactly && entry.length === constraints.exactly) {
      if (
        entry[0] === constraints.start &&
        props.gameWords.indexOf(entry.toLowerCase()) === -1
      ) {
        options.url = `https://wordsapiv1.p.rapidapi.com/words/${entry}`;
        axios
          .request(options)
          .then((response) => {
            console.log(response.data);
            props.addWord(response.data);
            props.addGameWord(entry.toLowerCase());
            if (response.data.frequency < 2) {
              let newScore = props.score + 10;
              props.setScore(newScore);
            } else {
              console.log("incrementing score");
              let newScore = props.score + 1;
              props.setScore(newScore);
            }
          })
          .catch((err) => {
            console.log(err);
            props.addWrongWord(entry);
          });
      }
    }
    console.log(entry);
    setEntry("");
  };

  return (
    <div
      className="game-center"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        position: "absolute",
        zIndex: "999",
        border: "1px black solid",
        top: "50%",
        left: "50%",
        height: "500px",
        width: "800px",
        backgroundColor: "white",
        transform: "translate(-50%, -50%)",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div
        className="game-container"
        style={{
          backgroundColor: "lavender",
          height: "100%",
          width: "100%",
          position: "relative",
        }}
      >
        <Button
          size="sm"
          variant="danger"
          style={{ position: "absolute", top: "0", right: "0" }}
          onClick={() => {
            props.end();
            props.setGameWords([]);
          }}
        >
          Close
        </Button>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Timer time={time} setTime={setTime} end={props.end}></Timer>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
          className="game-constraints"
        >
          <span className="constraint">Starts with</span>
          <span style={{ fontSize: "30px" }}>{constraints.start}</span>
        </div>
        <ShowEntry entry={entry} length={constraints.exactly}></ShowEntry>
        <div style={{ textAlign: "center", justifyContent: "center" }}>
          <input
            className="word-enter"
            style={{}}
            value={entry}
            onChange={(e) => {
              setEntry(e.target.value);
            }}
          ></input>
          <pre>{entry}</pre>
          <Button
            size="sm"
            onClick={() => {
              handleEntry();
            }}
          >
            Add Word
          </Button>
          <div
            style={
              time === "Time's up!"
                ? { paddingTop: "20px" }
                : { visibility: "hidden" }
            }
          >
            <label>Tag</label>
            <br></br>
            <input
              className="tag-enter"
              value={tag}
              onChange={(e) => {
                setTag(e.target.value);
              }}
            ></input>
            <br></br>
            <Button
              onClick={() => {
                if (tag.length > 0) {
                  props
                    .handleSubmit({
                      tag: tag.slice(0, 3).toUpperCase(),
                      count: props.gameWords.length,
                      words: props.gameWords,
                      score: props.score,
                    })
                    .then(() => {
                      props.end();
                    })
                    .catch(() => {
                      props.end();
                    });
                }
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;

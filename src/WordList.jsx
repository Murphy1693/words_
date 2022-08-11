import React from "react";
import WordEntry from "./WordEntry.jsx";
import WordModal from "./WordModal.jsx";

const WordList = ({ words, setModal }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: "30px", color: "white" }}>Words</span>
      <br></br>
      <div
        // style={{
        //   backgroundColor: "lightblue",
        //   display: "flex",
        //   minHeight: "400px",
        //   width: "300px",
        //   flexDirection: "column",
        //   textAlign: "center",
        // }}
        className="word-list-container"
      >
        {words.map(function (word, i) {
          return (
            <WordEntry
              setModal={setModal}
              key={i}
              word={word}
              index={i}
            ></WordEntry>
          );
        })}
      </div>
    </div>
  );
};

export default WordList;

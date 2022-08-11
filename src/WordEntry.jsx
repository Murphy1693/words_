import React from "react";
import WordModal from "./WordModal.jsx";

const WordEntry = ({ word, index, setModal }) => {
  if (word.word) {
    return (
      <div
        style={
          word.frequency < 2
            ? { backgroundColor: "lightgreen", margin: "5px" }
            : { margin: "5px" }
        }
        onClick={() => {
          if (word.word) {
            setModal({ open: true, index: index });
          }
        }}
        className="word-entry"
      >
        {word.word}
      </div>
    );
  } else {
    return (
      <div style={{ color: "red", margin: "5px" }} className="wrong-word-entry">
        {word}
      </div>
    );
  }
};

export default WordEntry;

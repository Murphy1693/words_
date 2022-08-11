import React from "react";
import DefinitionEntry from "./DefinitionEntry.jsx";
import Button from "react-bootstrap/Button";

const WordModal = (props) => {
  let handleClick = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      props.setModal({ open: false, index: null });
    }
  };

  return (
    <div
      onClick={(e) => {
        handleClick(e);
      }}
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, .5)",
      }}
    >
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          position: "absolute",
          zIndex: "998",
          border: "1px black solid",
          top: "50%",
          left: "50%",
          minWidth: "400px",
          minHeight: "200px",
          backgroundColor: "lightblue",
          transform: "translate(-50%, -50%)",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "50px",
            background: "lightblue",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              minHeight: "50px",
            }}
          >
            <span style={{ margin: "auto", fontSize: "30px" }}>
              {props.word.word}
            </span>
          </div>
        </div>
        {props.word.pronunciation?.all ? (
          <span
            style={{
              textAlign: "center",
              fontSize: "16px",
              paddingBottom: "15px",
              backgroundColor: "lightblue",
            }}
          >
            {props.word.pronunciation?.all}
          </span>
        ) : (
          <div style={{ height: "30px", backgroundColor: "lightblue" }}></div>
        )}
        <div
          className="definitions-container"
          style={{
            minHeight: "50px",
            background: "lightblue",
            display: "flex",
            gap: "40px",
            justifyContent: "center",
          }}
        >
          {props.word.results?.map(function (wordObj, i) {
            return (
              <DefinitionEntry
                key={i}
                definitionObject={wordObj}
              ></DefinitionEntry>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WordModal;

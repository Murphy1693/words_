import React from "react";
import ShowEntryBox from "./ShowEntryBox.jsx";

const ShowEntry = (props) => {
  let options = Array(props.length).fill(0);
  return (
    <div
      style={{
        display: "flex",
        height: "100px",
        justifyContent: "center",
        textAlign: "center",
        margin: "auto",
        width: "60%",
      }}
    >
      {options.map(function (e, i) {
        return <ShowEntryBox key={i} value={props.entry[i]}></ShowEntryBox>;
      })}
    </div>
  );
};

export default ShowEntry;

import React from "react";

const ShowEntryBox = (props) => {
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        fontSize: "40px",
      }}
      className="show-entry-box"
    >
      <span style={{ display: "flex", alignItems: "center" }}>
        {props.value}
      </span>
    </div>
  );
};

export default ShowEntryBox;

import React, { useEffect, useState } from "react";

const Timer = ({ time, setTime, end }) => {
  useEffect(() => {
    let x = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      }
      if (time < 1) {
        setTime("Time's up!");
        clearInterval(x);
      }
    }, 1000);
    return () => {
      clearInterval(x);
    };
  }, [time]);

  return (
    <div className="timer-container" style={{ fontSize: "60px" }}>
      {time === "Time's up!" ? (
        <span style={{ color: "red", fontWeight: "bold" }}>{time}</span>
      ) : (
        <span>{time}</span>
      )}
    </div>
  );
};

export default Timer;

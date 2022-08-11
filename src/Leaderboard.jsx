import React from "react";
import LeaderboardEntry from "./LeaderboardEntry";
const Leaderboard = ({ leaders }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: "30px", color: "white" }}>Leaderboard</span>
      <br></br>
      <div className="leaderboard">
        {leaders.map(function (e, i) {
          return <LeaderboardEntry key={i} leader={e}></LeaderboardEntry>;
        })}
      </div>
    </div>
  );
};

export default Leaderboard;

import React from "react";

const LeaderboardEntry = ({ leader }) => {
  return (
    <div className="leaderboard-entry">
      <span className="leaderboard-entry-name">{leader.tag}</span>
      <span className="leaderboard-entry-count">{leader.count}</span>
      <span className="leaderboard-entry-score">{leader.score}</span>
    </div>
  );
};

export default LeaderboardEntry;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeaderboardList from './LeaderboardList';
import AddScorePopup from './AddScorePopup';
import AutoScrollFooter from './AutoScrollFooter';
import RecentEntry from './RecentEntry'; 
import { addScore } from './leaderboardslice'; 
import projectLogo from './top.svg'; 


const LeaderboardContainer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const scores = useSelector((state) => state.leaderboard.scores);
  const recentEntry = useSelector((state) => state.leaderboard.recentEntry);
  const dispatch = useDispatch();

  const handleAddScore = (newScore) => {
    dispatch(addScore(newScore));
    setShowPopup(false);
  };

  return (
    <div className="leaderboard-container">
    <div className="header">
      <div className="header-left">
        <h1 className="header-title">GILLY'S</h1>
        <p className="header-subtitle">Koramangala</p>
      </div>
      <div className="header-right">
        <img src={projectLogo} alt="Project 7EHO" />
      </div>
    </div>
    <div>
      <h1>Fastest of Today</h1>
    </div>
      <LeaderboardList scores={scores} />
      <RecentEntry entry={recentEntry} />
      <button onClick={() => setShowPopup(true)} className="add-score-button">Add Score</button>
      {showPopup && <AddScorePopup onClose={() => setShowPopup(false)} onAddScore={handleAddScore} />}
      <AutoScrollFooter />
    </div>
  );
};

export default LeaderboardContainer;
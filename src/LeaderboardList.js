import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LeaderboardItem from './LeaderboardItem';
import { clearNewFlag } from './leaderboardslice';

const LeaderboardList = ({ scores }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearNewFlag());
    }, 500);

    return () => clearTimeout(timer);
  }, [scores, dispatch]);

  return (
    <div className="leaderboard-list">
      <div className="leaderboard-header">
        <span className="rank-header"></span>
        <span className="name-header">NAME</span>
        <span className="trophy-header"></span>
        <span className="prize-header">PRIZE</span>
        <span className="time-header">TIME</span>
      </div>
      <ul>
        {scores.map((score) => (
          <LeaderboardItem 
            key={score.id}
            {...score} 
            className={score.isNew ? 'leaderboard-item-new' : ''}
          />
        ))}
      </ul>
    </div>
  );
};

export default LeaderboardList;
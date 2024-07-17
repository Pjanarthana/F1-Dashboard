import React from 'react';

const LeaderboardItem = ({ rank, name, time, prize, className }) => {
  const displayName = name && typeof name === 'string' 
    ? (name.length > 20 ? name.substring(0, 20) + '...' : name)
    : 'Unknown';

  return (
    <li className={`leaderboard-item rank-${rank} ${className}`}>
      <span className="rank">{rank}</span>
      <span className="name">{displayName}</span>
      <span className="trophy">{rank <= 3 ? '🏆' : ''}</span>
      <span className="prize">{prize ? `₹${prize}` : '-'}</span>
      <span className="time">{time || 'N/A'}</span>
    </li>
  );
};

export default LeaderboardItem;
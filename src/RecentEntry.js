import React, { useEffect, useState } from 'react';

const RecentEntry = ({ entry }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (entry) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 1000); // Duration of animation
      return () => clearTimeout(timer);
    }
  }, [entry]);

  if (!entry) return null;

  return (
    <div className={`recent-entry ${animate ? 'animate' : ''}`}>
      <h2>RECENT ENTRY</h2>
      <div className="recent-entry-content">
        <span className="recent-entry-rank">{entry.rank}</span>
        <span className="recent-entry-name">{entry.name}</span>
        <span className="recent-entry-time">{entry.time}</span>
      </div>
    </div>
  );
};

export default RecentEntry;
import React, { useState } from 'react';
import './AddScorePopup.css';

const AddScorePopup = ({ onClose, onAddScore }) => {
  const [name, setName] = useState('');
  const [prize, setPrize] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddScore({ name, prize: parseInt(prize), time });
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Add New Score</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="prize">Prize (₹):</label>
            <input
              type="number"
              id="prize"
              value={prize}
              onChange={(e) => setPrize(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time (HH:MM:SS):</label>
            <input
              type="text"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
              placeholder="00:00:00"
              required
            />
          </div>
          <div className="button-group">
            <button type="submit" className="submit-btn">Add Score</button>
            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddScorePopup;
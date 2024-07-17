import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scores: [],
  recentEntry: null,
};

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    addScore: (state, action) => {
      const newScore = { ...action.payload, isNew: true, id: Date.now() };
      state.scores.push(newScore);
      state.scores.sort((a, b) => a.time.localeCompare(b.time));
      state.scores = state.scores.slice(0, 10).map((score, index) => ({
        ...score,
        rank: index + 1
      }));
      state.recentEntry = { ...newScore, rank: state.scores.findIndex(s => s.id === newScore.id) + 1 };
    },
    clearNewFlag: (state) => {
      state.scores = state.scores.map(score => ({ ...score, isNew: false }));
    }
  },
});

export const { addScore, clearNewFlag } = leaderboardSlice.actions;

export default leaderboardSlice.reducer;
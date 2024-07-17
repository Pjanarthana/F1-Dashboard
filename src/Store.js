import { configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from './leaderboardslice';

export const store = configureStore({
  reducer: {
    leaderboard: leaderboardReducer,
  },
});
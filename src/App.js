import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Store';
import LeaderboardContainer from './LeaderboardContainer';
import './App.css';  // Add this line to import the CSS

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LeaderboardContainer />
      </div>
    </Provider>
  );
}

export default App;
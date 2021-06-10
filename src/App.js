import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Code Translate
        </h1>
        <p>This website is still under development. Please check back later this month.</p>
        <p>Thanks for visiting! :)</p>
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;

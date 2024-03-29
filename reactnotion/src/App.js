import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("You've changed the counter");
  }, [counter]);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;


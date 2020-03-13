import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState('fodaa');
  const generateRandomNumber = () => setRandomNumber(Math.random() * 100);

  useEffect(() => {
    const timer = setInterval(generateRandomNumber, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    document.title = randomNumber;
  }, [randomNumber]);

  return (
    <div className="App">
      <button onClick={generateRandomNumber}>gerar Outro numero</button>
      <div>{randomNumber}</div>
    </div>
  );
}

export default App;

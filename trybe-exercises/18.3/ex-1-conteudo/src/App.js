import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState('fodaa');
  const generateRandomNumber = () => setRandomNumber(Math.random() * 100);

  useEffect(() => {
    document.title = randomNumber;
  });

  useEffect(() => {
    setTimeout(() => generateRandomNumber(), 10000);
  }, [randomNumber]);
  return (
    <div className="App">
      <button onClick={generateRandomNumber}>gerar Outro numero</button>
      <div>{randomNumber}</div>
    </div>
  );
}

export default App;

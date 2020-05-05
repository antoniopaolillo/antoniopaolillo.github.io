import React, { useState } from "react";
import "./App.css";

function App(props) {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <p>count: {counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <img src={`../images/img-${props.id}.jpg`} />
      <img src="../images/img-4.jpg" />
    </div>
  );
}

export default App;

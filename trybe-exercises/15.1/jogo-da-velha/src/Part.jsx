import React, { useState } from 'react';
import './Part.css';

function Part({index, value, setPlayed }) {
  const [isClicked, setIsClicked] = useState(false);
  function changeImage() {
    setPlayed();
    setIsClicked(true);
  }
  return (
    <div
      data-testid={`div${index}`}
      onClick={isClicked ? null : changeImage}
      className={value ? `play${value}` : 'notPlayed'}
    ></div>
  );
}

export default Part;

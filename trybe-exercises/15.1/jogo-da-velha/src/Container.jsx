import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Part from './Part';
import './Part.css';

function changeImage(index, plays, changePlayer, player, dispatch) {
  plays[index] = player;
  dispatch({ type: 'JOGAR', data: [...plays] });
  changePlayer();
}

function Container() {
  const [player, setPlayer] = useState(1);
  function changePlayer() {
    setPlayer(player === 1 ? 2 : 1);
  }

  const plays = useSelector((state) => state.data);
  const dispatch = useDispatch();
  return (
    <div className="container">
      {plays.map((value, index) => (
        <Part
          index={index}
          key={index}
          value={value}
          setPlayed={() =>
            changeImage(index, plays, changePlayer, player, dispatch)
          }
        />
      ))}
    </div>
  );
}

export default Container;

import React from 'react';
import { useSelector } from 'react-redux';
import Container from './Container';

const possibleResult = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function validationGame(plays) {
  const result = [false];
    possibleResult.filter((possible) => {
      if (
        (plays[possible[0]] === 1 &&
          plays[possible[1]] === 1 &&
          plays[possible[2]] === 1) ||
        (plays[possible[0]] === 2 &&
          plays[possible[1]] === 2 &&
          plays[possible[2]] === 2)
      ) {
        result[0] = true;
      }
      return false;
    });
  return result[0];
}
function Game() {
  const plays = useSelector((state) => state.data);
  return <div>{validationGame(plays) ? 'GANHOU' : <Container />}</div>;
}

export default Game;

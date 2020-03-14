import React, { useContext } from 'react';
import InputSearch from './InputSearch';
import InputRadio from './InputRadio';
import context from '../context/context';
function Header() {
  const {
    endpoint,
    isBeenUpdated,
    isStoped,
    setIsStoped,
    startInterval,
    stopInterval,
  } = useContext(context);

  function startOrStop() {
    if (isStoped) {
      setIsStoped(false);
      return startInterval();
    }
    setIsStoped(true);
    clearInterval(startInterval);
  }
  return (
    <header>
      <p>Endpoint: {endpoint}</p>
      <InputSearch />
      <InputRadio />
      {isBeenUpdated ? 'Updating...' : ''}
      <button onClick={startOrStop}>
        UPDATE: {isStoped ? 'Resume' : 'Stop'}
      </button>
    </header>
  );
}

export default Header;

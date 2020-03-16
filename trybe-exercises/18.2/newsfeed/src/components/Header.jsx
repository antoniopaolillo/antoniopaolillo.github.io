import React, { useContext } from 'react';
import InputSearch from './InputSearch';
import InputRadio from './InputRadio';
import context from '../context/context';
function Header() {
  const { endpoint, isBeenUpdated, isStoped, setIsStoped } = useContext(
    context,
  );

  return (
    <header>
      <p data-testid="endpoint">Endpoint: {endpoint}</p>
      <InputSearch />
      <InputRadio />
      <p data-testid="been-updating">{isBeenUpdated ? 'Updating...' : ''}</p>
      <button data-testid="btn-update" onClick={() => setIsStoped(!isStoped)}>
        UPDATE: {!isStoped ? 'Resume' : 'Stop'}
      </button>
    </header>
  );
}

export default Header;

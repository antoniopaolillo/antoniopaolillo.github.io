import React, { useContext } from 'react';
import InputSearch from './InputSearch';
import InputRadio from './InputRadio';
import context from '../context/context';
function Header() {
    const { endpoint } = useContext(context);
  return (
    <header>
      <p>Endpoint: {endpoint}</p>
      <InputSearch />
      <InputRadio />
    </header>
  );
}

export default Header;

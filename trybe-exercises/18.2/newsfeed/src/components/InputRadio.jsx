import React, { useContext } from 'react';
import context from '../context/context';
function InputRadio() {
  const { setEndpoint, setData } = useContext(context);
  function updateInput(value) {
    setData();
    setEndpoint(value);
  }
  return (
    <div>
      Top-headlines
      <input
        onClick={() => updateInput('top-headlines')}
        type="radio"
        name="endpoint"
        defaultChecked
      />
      Everything
      <input
        onClick={() => updateInput('everything')}
        type="radio"
        name="endpoint"
      />
    </div>
  );
}

export default InputRadio;

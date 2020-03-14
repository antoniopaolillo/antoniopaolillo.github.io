import React, { useContext } from 'react';
import context from '../context/context';
function InputRadio() {
  const { setEndpoint, endpoint } = useContext(context);
  return (
    <div>
      Top-headlines
      <input
        onClick={() => setEndpoint('top-headlines')}
        type="radio"
        name="endpoint"
        checked={endpoint === 'top-headlines' ? true : false}
      />
      Everything
      <input
        onClick={() => setEndpoint('everything')}
        type="radio"
        name="endpoint"
      />
    </div>
  );
}

export default InputRadio;

import React, { useContext, useState } from 'react';
import context from '../context/context';

function InputSearch() {
  const { setTextSearch, setData } = useContext(context);
  const [text, setText] = useState('');
  function updateInput() {
    setData();
    setTextSearch(text);
  }
  return (
    <div>
      <input
        data-testid="search-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button
        data-testid="btn-input-search"
        onClick={text !== '' ? updateInput : null}
        type="button"
      >
        Search
      </button>
    </div>
  );
}

export default InputSearch;

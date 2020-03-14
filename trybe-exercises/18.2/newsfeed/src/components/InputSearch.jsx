import React, { useContext, useState } from 'react';
import context from '../context/context';

function InputSearch() {
  const { setTextSearch } = useContext(context);
  const [text, setText] = useState();
  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} type="text" />
      <button onClick={text !== '' ? setTextSearch(text) : null} type="button">
        Search
      </button>
    </div>
  );
}

export default InputSearch;

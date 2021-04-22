import React from 'react';
import './App.css';

import { useLocalStorage } from './useLocalStorage';

function App() {
  const [text, setValue] = useLocalStorage('text', '');
  const [times, setTimes] = useLocalStorage('times', 0);

  return (
    <div className='App'>
      <textarea value={text} onChange={(e) => setValue(e.target.value)}>
        {text}
      </textarea>
      <p>
        <button onClick={() => setTimes(times + 1)}>send</button>
        <span>No times {times}</span>
      </p>
    </div>
  );
}

export default App;

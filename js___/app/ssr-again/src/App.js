import React from 'react';
import './App.css';

function App() {
  const [count, setCounter] = React.useState(0);

  const increment = () => setCounter(count + 1);
  const decrement = () => setCounter(count - 1);

  return (
    <>
      <p>{count}</p>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </>
  );
}

export default App;

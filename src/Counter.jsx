import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1 className="count-display">{count}</h1>

      <button className="counter-button" onClick={increment}>
        Add
      </button>
      <button className="counter-button" onClick={decrement}>
        Remove
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;

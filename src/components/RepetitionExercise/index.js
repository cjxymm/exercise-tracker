import { useState } from "react";

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{name}</h1>

      <h2 className="timer-display">{count}</h2>

      <button
        className="control-button"
        onClick={() => setCount(count + 1)}
      >
        Add Rep
      </button>

      <button
        className="control-button"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default RepetitionExercise;

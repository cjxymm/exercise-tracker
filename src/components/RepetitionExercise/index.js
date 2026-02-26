import { useState } from "react";

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{count} reps</h2>

      <button onClick={() => setCount(count + 1)}>
        + Add Rep
      </button>

      <br /><br />

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default RepetitionExercise;

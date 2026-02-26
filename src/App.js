import { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {!selectedExercise && (
        <>
          <h1>Exercises</h1>

          <button onClick={() => setSelectedExercise({ name: "Push Ups", type: "repetition" })}>
            Push Ups
          </button>
          <br /><br />

          <button onClick={() => setSelectedExercise({ name: "Running", type: "duration" })}>
            Running
          </button>
          <br /><br />

          <button onClick={() => setSelectedExercise({ name: "Plank", type: "duration" })}>
            Plank
          </button>
        </>
      )}

      {selectedExercise && (
        <>
          <button
            onClick={() => setSelectedExercise(null)}
            style={{ marginBottom: "20px" }}
          >
            ← Back
          </button>

          {selectedExercise.type === "repetition" && (
            <RepetitionExercise name={selectedExercise.name} />
          )}

          {selectedExercise.type === "duration" && (
            <DurationExercise name={selectedExercise.name} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
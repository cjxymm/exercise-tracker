import { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";
import "./App.css";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className="app-container">
      {!selectedExercise && (
        <>
          <h1>Exercises</h1>

          <button
            className="exercise-button"
            onClick={() => setSelectedExercise({ name: "Push Ups", type: "repetition" })}
          >
            Push Ups
          </button>

          <br /><br />

          <button
            className="exercise-button"
            onClick={() => setSelectedExercise({ name: "Running", type: "running" })}
          >
            Running
          </button>

          <br /><br />

          <button
            className="exercise-button"
            onClick={() => setSelectedExercise({ name: "Plank", type: "duration" })}
          >
            Plank
          </button>
        </>
      )}

      {selectedExercise && (
        <>
          <button
            className="back-button"
            onClick={() => setSelectedExercise(null)}
          >
            ← Back
          </button>

          {selectedExercise?.type === "running" && (
            <RunningExercise name={selectedExercise.name} />
          )}

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
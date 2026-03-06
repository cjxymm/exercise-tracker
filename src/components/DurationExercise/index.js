import { useState, useEffect } from "react";

function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>{name}</h1>

      <h2 className="timer-display">{formatTime()}</h2>

      <button
        className="control-button"
        onClick={() => setRunning(true)}
      >
        Start
      </button>

      <button
        className="control-button"
        onClick={() => setRunning(false)}
      >
        Stop
      </button>

      <button
        className="control-button"
        onClick={() => {
          setRunning(false);
          setSeconds(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default DurationExercise;
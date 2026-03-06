import { useState, useEffect } from "react";

function RunningExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  // format time as 00:00
  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
  };

  const recordLap = () => {
    setLaps([...laps, formatTime()]);
  };

  return (
    <div>
      <h1>{name}</h1>

      <h2>{formatTime()}</h2>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>

      <button onClick={() => {
        setRunning(false);
        setSeconds(0);
        setLaps([]);
      }}>
        Reset
      </button>

      <button onClick={recordLap}>Record Lap</button>

      <h3>Laps</h3>

      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            Lap {index + 1}: {lap}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RunningExercise;
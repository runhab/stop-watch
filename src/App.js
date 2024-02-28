import React, { useState, useEffect } from 'react';
import "./App.css";
function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      })
    }
    else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);

  }, [running]);
  return (
    <div id ='bodycontent'>
      <h1>Stop watch</h1>
      <div>
        <span>{("0" + Math.floor((time / 60000)%60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000)%60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10)%100)).slice(-2)}:</span>
      </div>
      <br />
      <div>
        {
          running ?
            (
          <button className='yellow' onClick={() => { setRunning(false) }}>stop</button>
          ) : (
         <button className='green' onClick={() => { setRunning(true) }}>start</button>

          )
        }
        
        <button className='red' onClick={() => { setTime(0) }}>reset</button>
      </div>
    </div>
  );
}
export default App
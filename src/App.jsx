import React, { useState, useEffect } from 'react';

import { BrowserRouter, Timer } from './services';

import CssReset from './CssReset';

const timerValues = {
  sessions: 2,
  workTime: { minutes: 0, seconds: 2 },
  breakTime: { minutes: 0, seconds: 1 },
};
const myTimer = new Timer(timerValues);

function Pomo() {
  const [values, setValues] = useState(myTimer.values);

  useEffect(() => {
    setInterval(() => {
      setValues({
        sessions: myTimer.values.sessions,
        workTime: {
          minutes: myTimer.values.workTime.minutes,
          seconds: myTimer.values.workTime.seconds,
        },
        breakTime: {
          minutes: myTimer.values.breakTime.minutes,
          seconds: myTimer.values.breakTime.seconds,
        },
      });
    }, 1000);
  }, [myTimer.values]);

  return (
    <>
      <h1>{JSON.stringify(values)}</h1>
      <button type="button" onClick={() => myTimer.start()}>Iniciar Timer</button>
      <button type="button" onClick={() => myTimer.start()}>Play Timer</button>
      <button type="button" onClick={() => myTimer.stop()}>Pause Timer</button>
      <button type="button" onClick={() => myTimer.reset()}>Reset Timer</button>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CssReset />
      <Pomo />
    </BrowserRouter>
  );
}

export default App;

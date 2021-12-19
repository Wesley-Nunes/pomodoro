import React from 'react';

import { Title, Settings, Button } from './components';

import CssReset from './CssReset';

const workTime = {
  minute: 25,
  second: 0,
};

const breakTime = {
  minute: 5,
  second: 0,
};

const sessions = 4;

function App() {
  return (
    <>
      <CssReset />
      <Title />
      <div>
        <Settings name="Work Time" value={`${workTime.minute}:${workTime.second}`} />
        <Settings name="Break Time" value={`${breakTime.minute}:${breakTime.second}`} />
        <Settings name="Sessions" value={`${sessions}`} />
      </div>
      <Button>Start</Button>
    </>
  );
}

export default App;

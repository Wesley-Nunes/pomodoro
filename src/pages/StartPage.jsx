import React from 'react';

import {
  Title, Settings, PageWrapper,
} from '../components';
import { useTimer } from '../services/state/stateTimer';

function StartPage() {
  const { getValues, setTimerValues } = useTimer();
  const { sessions, workTime, breakTime } = getValues();

  return (
    <PageWrapper>
      <Title />
      <div>
        <Settings
          name="Work Time"
          value={`${workTime.minutes}:${workTime.seconds}`}
          setFn={setTimerValues}
        />
        <Settings
          name="Break Time"
          value={`${breakTime.minutes}:${breakTime.seconds}`}
          setFn={setTimerValues}
        />
        <Settings
          name="Sessions"
          value={`${sessions}`}
          setFn={setTimerValues}
        />
      </div>
    </PageWrapper>
  );
}

export default StartPage;

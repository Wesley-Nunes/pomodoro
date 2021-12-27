import React from 'react';

import {
  Title, Settings, PageWrapper, Button, MyLink,
} from '../components';
import { useTimer } from '../services';

function StartPage() {
  const { getValues } = useTimer();
  const { sessions, workTime, breakTime } = getValues();

  return (
    <PageWrapper>
      <Title />
      <div>
        <Settings name="Work Time" value={`${workTime.minutes}:${workTime.seconds}`} />
        <Settings name="Break Time" value={`${breakTime.minutes}:${breakTime.seconds}`} />
        <Settings name="Sessions" value={`${sessions}`} />
      </div>
      <MyLink targetPage="/work-time">
        <Button bgColor="primary">Start</Button>
      </MyLink>
    </PageWrapper>
  );
}

export default StartPage;

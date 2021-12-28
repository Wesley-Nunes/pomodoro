import React from 'react';

import {
  PageWrapper, Title, Subtitle, ProgressRing,
} from '../components';
import { useTimer } from '../services/state/stateTimer';

function WorkTimePage() {
  const { getValues } = useTimer();
  const { sessions, workTime } = getValues();

  return (
    <PageWrapper>
      <Title />
      <Subtitle bgColor="primary" subtitle="Stay Focus" session={`${sessions}`} />
      <ProgressRing minute={`${workTime.minutes}`} second={`${workTime.seconds}`} circleColor="primary" />
    </PageWrapper>
  );
}

export default WorkTimePage;

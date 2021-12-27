import React from 'react';

import {
  PageWrapper, Title, Subtitle, ProgressRing,
} from '../components';
import { useTimer } from '../services/state/stateTimer';

function BreakTimePage() {
  const { getValues } = useTimer();
  const { sessions, breakTime } = getValues();

  return (
    <PageWrapper>
      <Title />
      <Subtitle bgColor="secondary" subtitle="Take a break" session={`${sessions}`} />
      <ProgressRing minute={`${breakTime.minutes}`} second={`${breakTime.seconds}`} circleColor="secondary" />
    </PageWrapper>
  );
}

export default BreakTimePage;

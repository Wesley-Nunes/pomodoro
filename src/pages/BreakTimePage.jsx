import React from 'react';

import {
  PageWrapper, Title, Subtitle, ProgressRing,
} from '../components';

function BreakTimePage() {
  return (
    <PageWrapper>
      <Title />
      <Subtitle bgColor="secondary" subtitle="Take a break" session="1/4" />
      <ProgressRing minute="05" second="00" circleColor="secondary" />
    </PageWrapper>
  );
}

export default BreakTimePage;

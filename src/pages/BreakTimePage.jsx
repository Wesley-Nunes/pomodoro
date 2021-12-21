import React from 'react';

import {
  PageWrapper, Title, Subtitle, ProgressRing, Button,
} from '../components';

function BreakTimePage() {
  return (
    <PageWrapper>
      <Title />
      <Subtitle bgColor="secondary" subtitle="Take a break" session="1/4" />
      <ProgressRing minute="05" second="00" circleColor="secondary" />
      <span>
        <Button bgColor="nullColor" targetPage="/">Restart</Button>
        <Button bgColor="secondary">Pause</Button>
      </span>
    </PageWrapper>
  );
}

export default BreakTimePage;

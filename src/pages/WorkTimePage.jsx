import React from 'react';

import {
  PageWrapper, Title, Subtitle, ProgressRing, Button,
} from '../components';

function WorkTimePage() {
  return (
    <PageWrapper>
      <Title />
      <Subtitle bgColor="primary" subtitle="Stay Focus" session="1/4" />
      <ProgressRing minute="25" second="00" circleColor="primary" />
      <span>
        <Button bgColor="nullColor">Restart</Button>
        <Button bgColor="primary">Pause</Button>
      </span>
    </PageWrapper>
  );
}

export default WorkTimePage;

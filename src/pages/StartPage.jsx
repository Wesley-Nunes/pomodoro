import React from 'react';

import {
  Title, Settings, Button, PageWrapper,
} from '../components';

function StartPage() {
  return (
    <PageWrapper>
      <Title />
      <div>
        <Settings name="Work Time" value="25:00" />
        <Settings name="Break Time" value="5:00" />
        <Settings name="Sessions" value="4" />
      </div>
      <Button bgColor="primary">Start</Button>
    </PageWrapper>
  );
}

export default StartPage;

import React from 'react';

import {
  Title, Settings, PageWrapper, Button, MyLink,
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
      <MyLink targetPage="/work-time">
        <Button bgColor="primary">Start</Button>
      </MyLink>
    </PageWrapper>
  );
}

export default StartPage;

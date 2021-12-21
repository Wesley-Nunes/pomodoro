import React from 'react';

import {
  Title, Settings, PageWrapper, Button,
} from '../components';
import { Link } from '../services';

function StartPage() {
  return (
    <PageWrapper>
      <Title />
      <div>
        <Settings name="Work Time" value="25:00" />
        <Settings name="Break Time" value="5:00" />
        <Settings name="Sessions" value="4" />
      </div>
      <Link to="work-time">
        <Button bgColor="primary">Start</Button>
      </Link>
    </PageWrapper>
  );
}

export default StartPage;

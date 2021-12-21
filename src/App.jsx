import React from 'react';

// import StartPage from './pages/StartPage';
import { Subtitle, ProgressRing, PageWrapper } from './components';
import CssReset from './CssReset';

function App() {
  return (
    <>
      <CssReset />
      { /* <StartPage /> */ }
      <PageWrapper>
        <Subtitle bgColor="primary" subtitle="Stay Focus" session="1/4" />
        <ProgressRing minute="25" second="00" circleColor="primary" />
      </PageWrapper>
    </>
  );
}

export default App;

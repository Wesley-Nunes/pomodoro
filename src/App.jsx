import React from 'react';

// import StartPage from './pages/StartPage';
import { Subtitle, PageWrapper } from './components';
import CssReset from './CssReset';

function App() {
  return (
    <>
      <CssReset />
      { /* <StartPage /> */ }
      <PageWrapper>
        <Subtitle bgColor="primary" subtitle="Stay Focus" session="1/4" />
        <Subtitle bgColor="secondary" subtitle="Take a break" session="1/4" />
      </PageWrapper>
    </>
  );
}

export default App;

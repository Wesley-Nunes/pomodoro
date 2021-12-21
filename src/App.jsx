import React from 'react';

import { BrowserRouter, Router } from './services';

import CssReset from './CssReset';

function App() {
  return (
    <BrowserRouter>
      <CssReset />
      <Router />
    </BrowserRouter>
  );
}

export default App;

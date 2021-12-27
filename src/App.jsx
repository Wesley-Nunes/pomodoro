import React from 'react';

import { BrowserRouter, Router } from './services/router/Router';

import CssReset from './CssReset';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <CssReset />
    </BrowserRouter>
  );
}

export default App;

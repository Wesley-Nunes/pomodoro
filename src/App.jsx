import React from 'react';

import { Navigation } from './components';
import { BrowserRouter, Router } from './services/router/Router';

import CssReset from './CssReset';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <Navigation />
      <CssReset />
    </BrowserRouter>
  );
}

export default App;

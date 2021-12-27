import React from 'react';
import ReactDOM from 'react-dom';

import { TimerProvider } from './services/state/stateTimer';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <TimerProvider>
      <App />
    </TimerProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

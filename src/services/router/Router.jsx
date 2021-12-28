import React from 'react';

import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';

import StartPage from '../../pages/StartPage';
import WorkTimePage from '../../pages/WorkTimePage';
import BreakTimePage from '../../pages/BreakTimePage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/work-time" element={<WorkTimePage />} />
      <Route path="/break-time" element={<BreakTimePage />} />
    </Routes>
  );
}

export { BrowserRouter, Router };

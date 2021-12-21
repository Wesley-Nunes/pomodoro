import React from 'react';

import { render, screen } from '@testing-library/react';

import { BrowserRouter } from '../../services';

import Button from './Button';

describe('Button Component', () => {
  render(
    <BrowserRouter>
      <Button bgColor="nullColor">Start</Button>
    </BrowserRouter>
  );

  it('renders a button to start the pomodoro', () => {
    const startButton = screen.getByRole('button', {  name: /start/i});
    expect(startButton).toBeInTheDocument();
  });
});
import React from 'react';

import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button Component', () => {
  render(<Button bgColor="nullColor">Start</Button>);

  it('renders a button to start the pomodoro', () => {
    const startButton = screen.getByRole('button', {  name: /start/i});
    expect(startButton).toBeInTheDocument();
  });
});
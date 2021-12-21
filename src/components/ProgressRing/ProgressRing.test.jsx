import React from 'react';

import { render, screen } from '@testing-library/react';

import ProgressRing from './ProgressRing';

describe('ProgressRing Component', () => {
  // The value of minute and second will be set by context
  const minute = '25';
  const second = '00';
  render(<ProgressRing minute={minute} second={second} circleColor="primary" />);

  it('renders a section with the time remained', () => {
    const timeRemained = new RegExp(`time remained ${minute} minutes and ${second} seconds`, 'i');
    const section = screen.getByRole('region', {  name: timeRemained });
    expect(section).toBeInTheDocument();
  });
});
import React from 'react';

import { render, screen } from '@testing-library/react';

import Subtitle from './Subtitle';

describe('Subtitle Component', () => {
  beforeEach(() => {
    render(<Subtitle bgColor="primary" subtitle="Stay Focus" session="1/4" />)
  })

  it('renders a heading with the phrase "stay focused"', () => {
    const heading = screen.getByRole('heading', {  name: /stay focus/i});
    expect(heading).toBeInTheDocument();
  });

  it('renders a value of 1/4', () => {
    const value = screen.getByText(/1\/4/i);
    expect(value).toBeInTheDocument();
  });
});
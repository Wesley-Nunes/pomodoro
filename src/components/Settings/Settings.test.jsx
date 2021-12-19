import React from 'react';

import { render, screen } from '@testing-library/react';

import Settings from './Settings';

describe('Settings Component', () => {
  beforeEach(() => {
    render(<Settings name="Sessions" value="4"/>)
  });

  it('renders a section with the word Settings', () => {
    const section = screen.getByRole('region', { name: /settings/i });
    expect(section).toBeInTheDocument();
  });

  it('renders a heading with the word Sessions', () => {
    const heading = screen.getByRole('heading', {  name: /sessions/i})
    expect(heading).toBeInTheDocument();
  });

  it('renders a button to decrease the value', () => {
    const decreaseButton = screen.getByRole('button', { name: /decrease value/i });
    expect(decreaseButton).toBeInTheDocument();
  });

  it('renders a value of four', () => {
    const value = screen.getByText(/4/i);
    expect(value).toBeInTheDocument();
  });

  it('renders a button to increase the value', () => {
    const increaseButton = screen.getByRole('button', { name: /increase value/i });
    expect(increaseButton).toBeInTheDocument();
  });
});

import React from 'react';

import {render, screen} from '@testing-library/react';

import Title from './Title';

describe('Title Component', () => {
  render(<Title />);

  it('renders a heading with the word Pomodoro', () =>{
    const heading = screen.getByRole('heading', { name: /pomodoro/i });
    expect(heading).toBeInTheDocument();
  });
});

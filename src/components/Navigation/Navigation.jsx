import React from 'react';

import { Link } from 'react-router-dom';

import Button from '../Button/Button';

function Navigation() {
  return (
    <Link to="/work-time">
      <Button bgColor="primary">Start</Button>
    </Link>
  );
}

export default Navigation;

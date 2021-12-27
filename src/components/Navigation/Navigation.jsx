import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import Button from '../Button/Button';

import NavigationWrapper from './NavigationStyle';

function StartPageNav() {
  return (
    <NavigationWrapper>
      <Link to="/work-time">
        <Button bgColor="primary">Start</Button>
      </Link>
    </NavigationWrapper>
  );
}

function TimerPageNav() {
  return (
    <NavigationWrapper>
      <Link to="/">
        <Button bgColor="nullColor">Restart</Button>
      </Link>
      <Button bgColor="secondary">Pause</Button>
    </NavigationWrapper>
  );
}

function Navigation() {
  const { pathname } = useLocation();
  return pathname === '/' ? <StartPageNav /> : <TimerPageNav />;
}

export default Navigation;

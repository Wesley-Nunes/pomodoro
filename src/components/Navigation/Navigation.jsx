import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useTimer } from '../../services/state/stateTimer';

import Button from '../Button/Button';

import NavigationWrapper from './NavigationStyle';

let isPlaying;
function StartPageNav({ createTimer, start }) {
  return (
    <NavigationWrapper>
      <Link to="/work-time">
        <Button
          bgColor="primary"
          handleClick={() => {
            isPlaying = true;
            createTimer();
            start();
          }}
        >
          Start
        </Button>
      </Link>
    </NavigationWrapper>
  );
}
StartPageNav.propTypes = {
  createTimer: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired,
};

function TimerPageNav({ start, stop, reset }) {
  const { action, name, color } = isPlaying
    ? { action: () => stop(), name: 'Pause', color: 'primary' }
    : { action: () => start(), name: 'Play', color: 'secondary' };

  return (
    <NavigationWrapper>
      <Link to="/">
        <Button bgColor="nullColor" handleClick={() => reset()}>Reset</Button>
      </Link>
      <Button
        bgColor={color}
        handleClick={() => {
          action();
          isPlaying = !isPlaying;
        }}
      >
        {name}
      </Button>
    </NavigationWrapper>
  );
}
TimerPageNav.propTypes = {
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

function Navigation() {
  const {
    createTimer, start, stop, reset,
  } = useTimer();
  const { pathname } = useLocation();
  return (
    pathname === '/'
      ? <StartPageNav createTimer={createTimer} start={start} />
      : <TimerPageNav start={start} stop={stop} reset={reset} />
  );
}

export default Navigation;

import React from 'react';

import PropTypes from 'prop-types';

import { ProgressRingWrapper, StyledCircle } from './ProgressRingStyle';

function ProgressRing({ minute, second, circleColor }) {
  return (
    <ProgressRingWrapper
      aria-label={`Time remained ${minute} minutes and ${second} seconds`}
      data-min={minute}
      data-sec={second}
    >
      <svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <StyledCircle circleColor={circleColor} r="90" cx="100" cy="100" fill="transparent" />
      </svg>
    </ProgressRingWrapper>
  );
}

ProgressRing.propTypes = {
  minute: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  circleColor: PropTypes.string.isRequired,
};

export default ProgressRing;

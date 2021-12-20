import React from 'react';

import PropTypes from 'prop-types';

import SubtitleWrapper from './SubtitleStyle';

function Subtitle({ subtitle, session, bgColor }) {
  return (
    <SubtitleWrapper bgColor={bgColor}>
      <h2>{subtitle}</h2>
      <p>{session}</p>
    </SubtitleWrapper>
  );
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  session: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Subtitle;

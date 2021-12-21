import React from 'react';

import PropTypes from 'prop-types';

import StyledButton from './ButtonStyle';

function Button({ children, bgColor }) {
  return (
    <StyledButton type="button" bgColor={bgColor}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Button;

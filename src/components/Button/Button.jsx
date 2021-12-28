import React from 'react';

import PropTypes from 'prop-types';

import StyledButton from './ButtonStyle';

function Button({ children, bgColor, handleClick }) {
  return (
    <StyledButton type="button" bgColor={bgColor} onClick={handleClick}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;

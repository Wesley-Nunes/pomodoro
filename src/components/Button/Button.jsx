import React from 'react';

import PropTypes from 'prop-types';

import StyledButton from './ButtonStyle';

function Button({ children }) {
  return (
    <StyledButton type="button">
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;

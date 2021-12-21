import React from 'react';

import PropTypes from 'prop-types';

import { Link } from '../../services';

import StyledButton from './ButtonStyle';

function Button({ children, bgColor, targetPage }) {
  return (
    <Link to={targetPage}>
      <StyledButton type="button" bgColor={bgColor}>
        {children}
      </StyledButton>
    </Link>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  targetPage: PropTypes.string,
};

Button.defaultProps = {
  targetPage: '',
};

export default Button;

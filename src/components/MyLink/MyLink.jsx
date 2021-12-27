import React from 'react';

import PropTypes from 'prop-types';

import { Link } from '../../services/router/Router';

function MyLink({ children, targetPage }) {
  return (
    <Link to={targetPage}>
      {children}
    </Link>
  );
}

MyLink.propTypes = {
  children: PropTypes.element.isRequired,
  targetPage: PropTypes.string.isRequired,
};

export default MyLink;

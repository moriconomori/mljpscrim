import React from 'react';
import PropTypes from 'prop-types';

const Default = ({ children }) => {
  return (
    <React.Fragment>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </React.Fragment>
  );
};

Default.propTypes = {
  children: PropTypes.element,
};

export default Default;

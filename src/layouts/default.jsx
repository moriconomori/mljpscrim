import React from 'react';

const Default = ({ children }) => {
  return (
    <React.Fragment>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </React.Fragment>
  );
};

export default Default;

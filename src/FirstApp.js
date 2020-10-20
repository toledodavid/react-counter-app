import React from 'react';
//import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({greeting, subtitle}) => {

  return (
    // <Fragment>
    //   <h1>Hello world</h1>
    //   <p>My first App</p>
    // </Fragment>

    // This is also a fragment
    <>
      <h1>{greeting}</h1>
      <p>{subtitle}</p>
    </>
  );
}

FirstApp.propTypes = {
  greeting: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  subtitle: "I'm a subtitle"
}

export default FirstApp;
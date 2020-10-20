import React from 'react';
//import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({greeting}) => {

  return (
    // <Fragment>
    //   <h1>Hello world</h1>
    //   <p>My first App</p>
    // </Fragment>

    // This is also a fragment
    <>
      <h1>{greeting}</h1>
      <p>My first App</p>
    </>
  );
}

FirstApp.propTypes = {
  greeting: PropTypes.string.isRequired
}

export default FirstApp;
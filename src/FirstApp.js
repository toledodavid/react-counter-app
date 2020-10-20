import React from 'react';
//import React, { Fragment } from 'react';

const FirstApp = () => {

  const greeting = 'Hello David';

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

export default FirstApp;
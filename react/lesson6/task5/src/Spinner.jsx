import React from 'react';

const Spinner = ({ size }) => {
  if (size) {
    return <Login />;
  }
  return <Logout />;
};


export default Spinner;
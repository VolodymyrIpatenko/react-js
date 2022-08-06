import React from 'react';
import calcFullYear from './calcFullYear';

export default props => {
  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I'm {calcFullYear(props.birthDate)} years
      old
    </div>
  );
};
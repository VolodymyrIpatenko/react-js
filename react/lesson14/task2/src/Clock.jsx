import React, { useState, useEffect } from 'react';
const moment = require('moment');

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ location, offset }) => {
  const [currentData, getTime] = useState(moment(getTimeWithOffset(offset)).format('LTS'));

  useEffect(() => {
    const interval = setInterval(() => {
      getTime(moment(getTimeWithOffset(offset)).format('LTS'));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{currentData}</div>
    </div>
  );
};

export default Clock;
import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [hideClock, onChangeStatus] = useState(true);

  const onHandlerClick = () => {
    onChangeStatus(!hideClock);
  };

  if (hideClock) {
    return (
      <>
        <button onClick={onHandlerClick}>Hide Clock</button>
        <Clock location="Kyiv" offset={3} />
        <Clock location="London" offset={0} />
        <Clock location="New-York" offset={-5} />
      </>
    );
  }
  return null;
};

export default App;
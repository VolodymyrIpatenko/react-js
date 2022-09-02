import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [stateStatus, getNewStatus] = useState('online');

  useEffect(() => {
    const onHandlerStatus = e => {
      getNewStatus(e.type);
    };
    window.addEventListener('online', onHandlerStatus);
    window.addEventListener('offline', onHandlerStatus);

    return () => {
      window.removeEventListener('online', onHandlerStatus);
      window.removeEventListener('offline', onHandlerStatus);
    };
  }, [stateStatus]);

  const status = stateStatus === 'online' ? 'status' : 'status status_offline';

  return <div className={status}>{stateStatus}</div>;
};

export default ConnectionStatus;
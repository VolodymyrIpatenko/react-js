import React from 'react';
import Offline from './Offline.jsx';
import Online from './Online.jsx';

class Status extends React.Component {
  state = {
    isOnline: true,
    isOffline: false,
  };

  render() {
    return (
      <>
        {this.state.isOnline && <Online />} {!this.state.isOffline && <Offline />}
      </>
    );
  }
}

export default Status;
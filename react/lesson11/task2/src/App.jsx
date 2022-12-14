import React, { Component } from 'react';
import Dialog from './Dialog';

class Page extends Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <div className="app">
        <button onClick={this.showDialog} className="btn">
          Show dialog
        </button>
        <Dialog isOpen={this.state.isOpen} title="some text" onClose={this.hideDialog}>
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    );
  }
}

export default Page;
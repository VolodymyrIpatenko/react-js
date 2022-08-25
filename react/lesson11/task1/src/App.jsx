import React, { Component } from 'react';
import EvenNumbers from './EvenNumbers';
import Numbers from './Numbers';
import OddNumbers from './OddNumbers';

class Page extends Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          number: this.state.number + 1,
        }),
      1000,
    );
  }

  render() {
    return (
      <div className="app">
        <OddNumbers title="Odd Numbers" number={this.state.number} />
        <Numbers title="All numbers" number={this.state.number} />
        <EvenNumbers title="Even Numbers" number={this.state.number} />
        <Numbers title="All numbers" number={17} />
      </div>
    );
  }
}

export default Page;
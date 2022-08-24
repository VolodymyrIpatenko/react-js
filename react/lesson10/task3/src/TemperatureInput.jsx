import React, { Component } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    console.log(props);
  }

  handleChange = event => {
    this.props.onTemperatureChange(event.target.value);
  };

  render() {
    const { temperatur, scale } = this.props;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input onChange={this.handleChange} value={temperatur} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
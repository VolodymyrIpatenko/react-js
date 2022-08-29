import React, { Component } from 'react';

class CreateTaskInput extends Component {
  state = {
    value: '',
  };

  handlerChange = event => {
    this.setState({
      value: event.target.value,
    });
  };
  handlerTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    return (
      <div className="create-task">
        <input
          onChange={this.handlerChange}
          className="create-task__input"
          type="text"
          value={this.state.value}
        />
        <button onClick={this.handlerTaskCreate} className="btn create-task__btn">
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;
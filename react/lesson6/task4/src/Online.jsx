import React,{Component} from 'react';

export default class Online extends React.Component {
   render() {
    return (
      <div className="status">
        <span className="status__text">Online</span>
        <button className="status__btn">All good!</button>
      </div>
    );
  }
}
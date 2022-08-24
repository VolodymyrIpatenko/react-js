import React, { Component } from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

class Page extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.onFetchUser(this.props.userId);
  }

  onFetchUser = userId => {
    const baseUrl = 'https://api.github.com/users/';
    fetch(`${baseUrl}${userId}`)
      .then(response => response.json())
      .then(userData =>
        this.setState({
          userData,
        }),
      );
  };

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}
export default Page;
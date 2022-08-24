import React, { Component } from 'react';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';

class Page extends Component {
  state = {
    userData: {
      firstName: 'Tom',
      lastName: 'Form',
    },
  };

  onChangeText = event => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        // ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="page">
        <h1 className="title">
          Hello, {this.state.userData.firstName} {this.state.userData.lastName}
        </h1>
        <main className="content">
          <ShoppingCart userName={this.state.userData.firstName} />
          <Profile userData={this.state.userData} onChange={this.onChangeText} />
        </main>
      </div>
    );
  }
}

export default Page;
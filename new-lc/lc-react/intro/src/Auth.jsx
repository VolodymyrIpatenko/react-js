// import React from "react";
// import Login from "./Login";
// import Logout from "./Logout";
// import Spinner from "./Spinner";

// ////  what is state - is data that can be changed 
// /// state stores data that can be rerender 


// const App = () => {
// 	///isLogin : false
// 	/// isSpinner : false
// 	const loginHandler = () => {cv0cv0cv0
// 	 };
// 	return (
// 		<>
// 			<Login onLogin={loginHandler} />
// 			<Logout />
// 			<Spinner/>
// 			</>
// 	)
// };

// export default App;


//// React Approach 
/// 1.make a layout 
/// 2.divide into components 
/// 3.build static version in React 
/// 4. which props, which state
/// 5.Implement Logic 80 % JS, 20 % REACT


class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isSpinner:false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: false,
    });
    setTimeout(() => {
      this.setState({
        isLoggedIn: false,
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    return (
      <>
        {this.state.isLoggedIn === 'loggedOut' && <Login onLogin={this.handleLogin} />}
        {this.state.isLoggedIn === 'loggedIn' && <Logout onLogout={this.handleLogout} />}
        {this.state.isLoggedIn === 'Spinner' && <Spinner size={50} />}
      </>
    );
  }
}
export default Auth;

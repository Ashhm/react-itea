import React from 'react';
import FacebookActions from '../../Actions/FacebookActions';

import './Authentication.less';

class FacebookAuth extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      status: '',
      user: ''
    }
  }

  componentWillMount() {
   FacebookActions.getLoginState()
     .then(res => {
       this.setState(res);
     });
  }

  handleLogin() {
    FacebookActions.login()
      .then(res => {
        this.setState(res);
      });
  }

  handleLogout() {
    FacebookActions.logout()
      .then(res => {
        this.setState(res);
      });
  }

  render() {
    const text = (this.state.status === 'connected' && this.state.user) ?
      `Thanks for logging in, ${this.state.user}` : 'Please log into this app';
    return (
      <div className='Main___auth'>
        <span>{text}</span>
        <div className='Button___group'>
          <button
            className='Button___style'
            onClick={this.handleLogin}
            hidden={this.state.status === 'connected'}
          >
            <a href="#">Login</a>
          </button>
          <button
            className='Button___style'
            onClick={this.handleLogout}
            hidden={this.state.status === 'unknown'}
          >
            <a href="#">Logout</a>
          </button>
        </div>
      </div>
    )
  }
}

export default FacebookAuth;
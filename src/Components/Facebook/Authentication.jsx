import React from 'react';

import './Authentication.less';

class FacebookAuth extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {status, username} = this.props.authState;
    const text = status && username ?
      `Thanks for logging in, ${username}` : 'Please log into this app';
    return (
      <div className='Main___auth'>
        <span>{text}</span>
        <div className='Button___group'>
          {
            !status && <button
              className='Button___style'
              onClick={this.props.onLogin}
            >
              <a href="#">Login</a>
            </button>
          }
          {
            status && <button
              className='Button___style'
              onClick={this.props.onLogout}
            >
              <a href="#">Logout</a>
            </button>
          }
        </div>
      </div>
    )
  }
}

export default FacebookAuth;
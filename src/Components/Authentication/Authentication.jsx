import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import './Authentication.less';

class FacebookAuth extends React.Component {
  static propTypes = {
    authState: PropTypes.object.isRequired,
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired
  };

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
            !status && <RaisedButton
              primary={true}
              onClick={this.props.onLogin}
              label='Login'
            />
          }
          {
            status && <RaisedButton
              primary={true}
              style={{textColor: 'white'}}
              onClick={this.props.onLogout}
              label='Logout'
            />
          }
        </div>
      </div>
    )
  }
}

export default FacebookAuth;
import React from 'react';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import Loading from "../Loading/Loading";

import '../Battle/Battle.less'

class UserContainer extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loading)
      return <Loading />;

    return (
      <div className='Player___container'>
        <h2>{this.props.label}</h2>
          <Avatar
            src={this.props.src}
            size={100}
          />
        <a href={this.props.url}>
          <span>{this.props.name}</span>
        </a>
        {this.props.children}
      </div>
    )
  }
}

export default UserContainer;
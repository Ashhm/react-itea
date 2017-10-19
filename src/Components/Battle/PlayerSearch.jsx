import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import './Battle.less';

class UserSearch extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.props.id, this.state.value);
  }

  handleInputChange(evt) {
    this.setState({
        value: evt.target.value
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='Search___container'>
        <TextField
          hintText='Enter username to search...'
          value={this.state.value}
          floatingLabelText={this.props.label}
          onChange={this.handleInputChange}
        />
        <RaisedButton type='submit' label="Search" primary={true}/>
      </form>
    )
  }
}

export default UserSearch;
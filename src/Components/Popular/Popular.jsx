import React from 'react';
import Selected from './Selected'
import FacebookAuth from '../Facebook/Authentication';
import PropTypes from 'prop-types';


import './Popular.less';
import PopularGrid from "./PopularGrid";

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(value) {
    this.setState({
      selectedLanguage: value
    });
  }

  render() {
    return (
      <div>
      <div className='Main__header'>
        <Selected
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.handleLanguageChange}
        />
      <FacebookAuth />
      </div>
        <PopularGrid />
      </div>
    )
  }
}

export default Popular;
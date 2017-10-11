import React from 'react';

import facebookApi from '../../utils/api';

import Pages from './Pages'
import PopularGrid from "./Grid/PopularGrid";

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  componentDidMount() {
    //console.log(facebookApi.getPage());
  }

  handleLanguageChange(value) {
    this.setState({
      selectedLanguage: value
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Pages
          value={this.state.selectedLanguage}
          onSelect={this.handleLanguageChange}
        >

        </Pages>
        <PopularGrid/>
      </div>
    )
  }
}

export default Popular;
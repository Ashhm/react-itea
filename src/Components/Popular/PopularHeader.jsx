import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import PropTypes from 'prop-types';

class PopularHeader extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const companies = [
      {name: 'DOU', query: 'devua'},
      {name: 'EPAM', query: 'EPAM.Ukraine'},
      {name: 'SoftServe', query: 'SoftServeCompany'},
      {name: 'Luxoft', query: 'Luxoft.Ukraine'},
      {name: 'GlobalLogic', query: 'GlobalLogicUkraine'},
      {name: 'Ciklum', query: 'ciklum'},
      {name: 'Infopulse', query: 'Infopulse'},
      {name: 'Eleks', query: 'ELEKS.Software'},
    ];

    return (
      <Tabs
        value={this.props.value}
        onChange={this.props.onChange}
      >
        {companies.map((item, index) => {
          return (
            <Tab
              key={index}
              label={item.name}
              value={item.query}
            />
          );
        })
        }
      </Tabs>
    )
  }
}


export default PopularHeader;
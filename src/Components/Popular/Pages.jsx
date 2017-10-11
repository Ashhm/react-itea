import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import PropTypes from 'prop-types';

const Pages = (props) => {
  const languages = ['All', 'JavaScript', 'Java', 'Ruby', 'Go', 'Python', 'PHP'];

  return (
    <Tabs
      value={props.value}
      onChange={props.onSelect}

    >
      {languages.map((item, index) => {
        return (
          <Tab
            key={index}
            label={item}
            value={item}
          />
        );
      })}
    </Tabs>
  )
};

Pages.PropTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Pages;
import React from 'react';
import PropTypes from 'prop-types';

const Selected = (props) => {
  const languages = ['All', 'JavaScript', 'Java', 'Ruby', 'Go', 'Python', 'PHP'];

  return (
    <ul
      className='languages'
    >
      {languages.map((item, index) => {
        return (
          <li
            key={index}
            className={
              props.selectedLanguage === item ?
                'selected' : null
            }
            onClick={props.onSelect.bind(null, item)}
          >
            {item}
          </li>
        )
      })}
    </ul>
  )
};

Selected.PropTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Selected;
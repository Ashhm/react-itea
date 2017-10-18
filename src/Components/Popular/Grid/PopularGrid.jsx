import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import PopularTab from '../Tab/PopularTab';
import Loading from "../../Loading/Loading";
import './PopularGrid.less';


class PopularGrid extends React.Component {
  static defaultProps = {
    data: []
  };

  static propTypes = {
    value: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  render() {
    const masonryOptions = {
      transitionDuration: '0.6s',
      fitWidth: true,
      gutter: 20
    };

    if (this.props.loading)
      return (<Loading />);


    return (
      <Masonry
        className='PopularGrid'
        options={masonryOptions}
      >
        {
          this.props.data.length > 1 &&
          this.props.data.map(element => (
            <PopularTab
              key={element.id}
              title={element.name}
              createdAt={element.created_time}
              picture={element.full_picture}
              link={element.link}
              url={element.permalink_url}
            >
              {element.message}
            </PopularTab>
          ))
        }

      </Masonry>
    );
  }
}

export default PopularGrid;
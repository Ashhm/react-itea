import React from 'react';
import FacebookActions from '../../Actions/FacebookActions';

import PopularHeader from './PopularHeader';
import PopularGrid from './Grid/PopularGrid';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'devua',
      loading: true,
      error: false,
      data: []
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
  }

  componentDidMount() {
    this.handleDataChange(this.state.selected);
  }

  handlePageChange(selected) {
    this.setState(() => {
      console.log(this.state);
      return {selected};
    });

    this.handleDataChange(selected);
  }

  handleDataChange(page) {
    this.setState(()=> {
      return {
        loading: true,
        data: [],
        error: false
      }
    });

    FacebookActions.fetchData(page)
      .then(({data}) => {
        this.setState(() => {
          return {
            loading: false,
            error: false,
            data
          }
        })
      })
      .catch(err => {
        this.set.state(() => {
          return {
            loading: false,
            error: true,
            data: []
          }
        })
      })
  }


  render() {
    console.log(this.props.location);
    const {selected, data, loading} = this.state;
    return (
      <div>
        <PopularHeader
          value={selected}
          onChange={this.handlePageChange}
        />
        <PopularGrid
          value={selected}
          data={data}
          loading={loading}
        />
      </div>
    )
  }
}

export default Popular;
import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const style = {
  card: {
    width: '300px',
    height: 'auto',
    float: 'left',
    marginBottom: '10px'
  },
  cardTitle: {
    fontWeight: 'bold',
    lineHeight: 'normal'
  },
  cardSubtitle: {
    textOverflow: 'clip',
    fontWeight: 'bold',
    color: 'blue'
  }
};

class PopularTab extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    picture: PropTypes.string,
    link: PropTypes.string,
    url: PropTypes.string.isRequired
  };

  /*linkify(text) {
    const urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, (url) => {
      return React.createElement('a', {href: url}, url);
    });
  }*/

  render() {
    const {title, picture, url, createdAt} = this.props;
    const created = `${createdAt.slice(11, 19)} ${createdAt.slice(0, 10).replace(/\-/g, '/')}`;
  /*  const text = this.linkify(this.props.children);
    console.log(text);*/
    return (
      <Card style={style.card}>
        <a href={url} target='_blank'>
          <CardMedia>
            <img src={picture} alt={`Picture for ${title}`}/>
          </CardMedia>
        </a>
        <CardTitle
          titleStyle={style.cardTitle}
          title={title}
          subtitle={created}
        />
        <CardText>
          {this.props.children}
        </CardText>
      </Card>
    )
  }
}

export default PopularTab;
import React from 'react';
import Masonry from 'react-masonry-component';
import PopularTab from './PopularTab'
import FacebookActions from '../../Actions/FacebookActions';
import './PopularGrid.less';

class PopularGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "id": "262134952380_10155659627327381",
          "message": "It's raining in Orlando but we are staying dry during Open Source Day at the Grace Hopper Celebration of Women in Computing! Our participants are working on the Filter Bubbler add-on for Firefox! It shows people how their web content is being filtered using their data collected by third parties. #hackforgood",
          "name": "Photos from Mozilla's post",
          "picture": "https://scontent.xx.fbcdn.net/v/t1.0-0/q81/s130x130/22154575_10155659627277381_9128152419321676422_n.jpg?oh=c705fee85999fa87e829a1f0a94e720c&oe=5A774F50"
        },
        {
          "id": "262134952380_10155657081102381",
          "message": "Mozilla is representing at the Grace Hopper Celebration of Women in Computing! Stop by our booth (3031) and say hi!",
          "picture": "https://scontent.xx.fbcdn.net/v/t1.0-0/s130x130/22195234_10155657081052381_1738041820988243654_n.jpg?oh=f1acbeb467dab3ee1150d3a636bed5b2&oe=5A462A5E"
        },
        {
          "id": "262134952380_10155656953282381",
          "message": "We're calling for artists and designers to create open assets for use in A-Frame 🐉🔮✨",
          "name": "Building WebVR Worlds Together: Mozilla and Sketchfab Launching Real-Time VR Design Challenge…",
          "picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQAccjen91roKTux&w=130&h=130&url=https%3A%2F%2Fbuffer-media-uploads.s3.amazonaws.com%2F59d515fb34e95d483331700d%2Fb6589fc6ab0dc82cf12099d1c2d40ab994e8410c_a4bacd3ad691c33a02875ecb7ff0e5e4e094dc9b_facebook&cfs=1&_nc_hash=AQCuaMdAQb7Jn6DG"
        },
        {
          "id": "262134952380_10155654388632381",
          "message": "Through our open source support program we get to recognize, celebrate, and support projects that contribute to our work and to the health of the Internet.",
          "name": "Mozilla Awards Over Half a Million to Open Source Projects – The Mozilla Blog",
          "picture": "https://scontent.xx.fbcdn.net/v/t45.1600-4/c53.0.130.130/p130x130/22018593_6087743236148_2739338563819667456_n.png?oh=749dbf8821cd11a486ef597cee219430&oe=5A7AF6A4"
        },
        {
          "id": "262134952380_10155653938812381",
          "message": "For those working to connect the unconnected: Mozilla and the National Science Foundation are offering $2 million in prizes for big, bold ideas. https://mzl.la/2xdgvgW",
          "name": "Timeline Photos",
          "picture": "https://scontent.xx.fbcdn.net/v/t1.0-0/s130x130/22279584_10155653938812381_4835997162545056383_n.jpg?oh=6660a12d03b2ca1e8884ff96c5e1dc02&oe=5A799562"
        },
        {
          "id": "262134952380_10155635750952381",
          "message": "Happening at #mozfest this October: hundreds of immersive sessions, 19 compelling speakers, and six diverse tracks. Get the scoop at http://mozfest.org",
          "name": "Mozilla Festival",
          "picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQB8vgDXTaZkGgQa&w=130&h=130&url=https%3A%2F%2Fmozillafestival.org%2Fassets%2Fimages%2Fsite-thumbnail.jpg&cfs=1&sx=529&sy=0&sw=630&sh=630&_nc_hash=AQCYGubhGJsnPWCp"
        },
        {
          "id": "262134952380_10155635010517381",
          "message": "Our zero rating research in Myanmar found that, unsurprisingly, people want unrestricted access to the internet.",
          "name": "Internet Use Is On The Rise In Myanmar, But Better Options Are Needed",
          "picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQCjhrG0X7gH9aO-&w=130&h=130&url=https%3A%2F%2Fbuffer-media-uploads.s3.amazonaws.com%2F59c960ade7e9eab171bcbecb%2F5ca42c16223eeff3b03c695d7f837caff360e407_c415e8c2f82d573e29e40e139c98fea84160abf6_facebook&cfs=1&sx=20&sy=0&sw=639&sh=639&_nc_hash=AQBP4XVnG9iQf4H1"
        },
        {
          "id": "262134952380_10155624652017381",
          "message": "How do we, as internet citizens, make an impact on the issues surrounding free speech online?",
          "name": "Free speech online: solving thorny issues together – Internet Citizen",
          "picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQBsfb1-stylmrD4&w=130&h=130&url=https%3A%2F%2Fbuffer-media-uploads.s3.amazonaws.com%2F59c52419c12632096cf8e0fe%2F21928de30c99de26240b705ebf654330cd906e8d_588abe1f0b9e62efb0bb3e51f4eb47a3febcaeac_facebook&cfs=1&_nc_hash=AQCPh4UPy6gEYsih"
        },
        {
          "id": "262134952380_10155623062247381",
          "message": "The Internet was built on the idea that anyone might create the next big thing. With web extensions, they still can.",
          "name": "Firefox add-ons keep the web open, connected, and decentralized – Internet Citizen",
          "picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQDmClenjUMwEtj8&w=130&h=130&url=https%3A%2F%2Fbuffer-media-uploads.s3.amazonaws.com%2F59c41e40c12632db063c2a83%2Fed756218f9bf03e43789ecf973a145b1aaad6bcf_a407bf6fa5c550a6937fb36066de100a5bccfba3_facebook&cfs=1&_nc_hash=AQCH69kQO8rSvuKL"
        },
        {
          "id": "262134952380_10155616363082381",
          "message": "Meet two friends of ours headed to #mozfest this year: Roksana and Foyez, who teach web literacy in Bangladesh.",
          "name": "Changemakers in Bangladesh: Our MozFest 2017 Workshop",
          "picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQAhJ2HYyQz6s9gY&w=130&h=130&url=https%3A%2F%2Fbuffer-media-uploads.s3.amazonaws.com%2F59c15e15efda0c254e2de1d7%2F356a192b7913b04c54574d18c28d46e6395428ab_af1e354162f803adcfec35a5c35dff118b7ba2db_facebook&cfs=1&sx=128&sy=0&sw=855&sh=855&_nc_hash=AQAXDbqaZyJHF3oA"
        }
      ]
    }
  }

  componentDidMount() {
  }

  render() {
    const masonryOptions = {
      itemSelector: '.PopularTab',
      columnWidth: 30,
      gutter: 10,
      isFitWidth: true
    };
    return (
      <Masonry
        className='PopularGrid'
        options={masonryOptions}
      >
        {
        this.state.data.map((element, index) => (
          <PopularTab
            key={index}
            title={element.name}
            picture={element.picture}
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
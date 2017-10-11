import React from 'react';
import Masonry from 'react-masonry-component';
import PopularTab from '../Tab/PopularTab'
import FacebookActions from '../../../Actions/FacebookActions';
import './PopularGrid.less';

class PopularGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/22154575_10155659627277381_9128152419321676422_n.jpg?oh=6a4463cafecf1bef3463394161c39c34&oe=5A3DF644",
          "message": "It's raining in Orlando but we are staying dry during Open Source Day at the Grace Hopper Celebration of Women in Computing! Our participants are working on the Filter Bubbler add-on for Firefox! It shows people how their web content is being filtered using their data collected by third parties. #hackforgood",
          "name": "Photos from Mozilla's post",
          "id": "262134952380_10155659627327381"
        },
        {
          "full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/22195234_10155657081052381_1738041820988243654_n.jpg?oh=51c7b799f9454bf8f6b42674b8e6f442&oe=5A3D3F53",
          "message": "Mozilla is representing at the Grace Hopper Celebration of Women in Computing! Stop by our booth (3031) and say hi!",
          "id": "262134952380_10155657081102381"
        },
        {
          "full_picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQB2Yn6Emvj3lbyC&url=https%3A%2F%2Fbuffer-media-uploads.s3.amazonaws.com%2F59d515fb34e95d483331700d%2Fb6589fc6ab0dc82cf12099d1c2d40ab994e8410c_a4bacd3ad691c33a02875ecb7ff0e5e4e094dc9b_facebook&_nc_hash=AQCEj0gW0M8PpaNf",
          "message": "We're calling for artists and designers to create open assets for use in A-Frame 🐉🔮✨",
          "name": "Building WebVR Worlds Together: Mozilla and Sketchfab Launching Real-Time VR Design Challenge…",
          "id": "262134952380_10155656953282381"
        },
        {
          "full_picture": "https://scontent.xx.fbcdn.net/v/t45.1600-4/22018593_6087743236148_2739338563819667456_n.png?oh=30b3baea1a86f8f51e4dd12b2a499421&oe=5A776E60",
          "message": "Through our open source support program we get to recognize, celebrate, and support projects that contribute to our work and to the health of the Internet.",
          "name": "Mozilla Awards Over Half a Million to Open Source Projects – The Mozilla Blog",
          "id": "262134952380_10155654388632381"
        },
        {
          "full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/22279584_10155653938812381_4835997162545056383_n.jpg?oh=89b848e01a80c844128ece077a5c208b&oe=5A73CA6F",
          "message": "For those working to connect the unconnected: Mozilla and the National Science Foundation are offering $2 million in prizes for big, bold ideas. https://mzl.la/2xdgvgW",
          "name": "Timeline Photos",
          "id": "262134952380_10155653938812381"
        },
        {
          "full_picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQBaPc8d_SMtvwYw&url=https%3A%2F%2Fbuffer-media-uploads.s3.amazonaws.com%2F59c960ade7e9eab171bcbecb%2F5ca42c16223eeff3b03c695d7f837caff360e407_c415e8c2f82d573e29e40e139c98fea84160abf6_facebook&_nc_hash=AQBgjMJqCKT6gCgi",
          "message": "Our zero rating research in Myanmar found that, unsurprisingly, people want unrestricted access to the internet.",
          "name": "Internet Use Is On The Rise In Myanmar, But Better Options Are Needed",
          "id": "262134952380_10155635010517381"
        },
        {
          "full_picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQB4OajruG0tqEIc&url=https%3A%2F%2Fbuffer-media-uploads.s3.amazonaws.com%2F59c52419c12632096cf8e0fe%2F21928de30c99de26240b705ebf654330cd906e8d_588abe1f0b9e62efb0bb3e51f4eb47a3febcaeac_facebook&_nc_hash=AQCdqkLFyRXaABqk",
          "message": "How do we, as internet citizens, make an impact on the issues surrounding free speech online?",
          "name": "Free speech online: solving thorny issues together – Internet Citizen",
          "id": "262134952380_10155624652017381"
        },
        {
          "full_picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQBiILmhyWf2puKD&url=https%3A%2F%2Fbuffer-media-uploads.s3.amazonaws.com%2F59c41e40c12632db063c2a83%2Fed756218f9bf03e43789ecf973a145b1aaad6bcf_a407bf6fa5c550a6937fb36066de100a5bccfba3_facebook&_nc_hash=AQCknnRALX9rAHQC",
          "message": "The Internet was built on the idea that anyone might create the next big thing. With web extensions, they still can.",
          "name": "Firefox add-ons keep the web open, connected, and decentralized – Internet Citizen",
          "id": "262134952380_10155623062247381"
        },
        {
          "full_picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQA8LphMvSIIAmqx&url=https%3A%2F%2Fbuffer-media-uploads.s3.amazonaws.com%2F59c15e15efda0c254e2de1d7%2F356a192b7913b04c54574d18c28d46e6395428ab_af1e354162f803adcfec35a5c35dff118b7ba2db_facebook&_nc_hash=AQDik8204T_fL-3q",
          "message": "Meet two friends of ours headed to #mozfest this year: Roksana and Foyez, who teach web literacy in Bangladesh.",
          "name": "Changemakers in Bangladesh: Our MozFest 2017 Workshop",
          "id": "262134952380_10155616363082381"
        },
        {
          "full_picture": "https://scontent.xx.fbcdn.net/v/t39.2147-6/21387150_10155599258412381_4853938769675419648_n.jpg?oh=422f6eac715f3e802da817d1cd151b91&oe=5A4B41BD",
          "message": "Help us welcome our 15 newest Mozilla Fellows! They're artists and policy analysts, security researchers and ethical hackers.",
          "name": "Mozilla Announces 15 New Fellows for Science, Advocacy, and Media – The Mozilla Blog",
          "id": "262134952380_10155599258842381"
        },
        {
          "full_picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQCAexjtyXzzoDXJ&url=https%3A%2F%2Fbuffer-media-uploads.s3.amazonaws.com%2F59b6bdf0f0af40c167320a01%2F0e76292794888d4f1fa75fb3aff4ca27c58f56a6_52f7bf50935ef620921b00301ef8fb42594e722d_facebook&_nc_hash=AQDJ7AOcWFwK4uxi",
          "message": "\"Learn to distinguish between humility and your imposter syndrome. Humility allows you to grow, be a much better leader, and build truly inclusive teams. Listening to imposter syndrome holds you back; makes you play it too safe.” — Our Chief Innovation Officer, Katharina Borchert",
          "name": "29 Powerful Women Reveal Their Success Secrets, Leadership Tips & The Awful Advice They Didn't Take",
          "id": "262134952380_10155593741437381"
        },
        {
          "full_picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQApn78NnpMG2SVt&url=https%3A%2F%2Fblog.mozilla.org%2Fwp-content%2Fuploads%2F2017%2F09%2F03_copyright_facebook.jpg&_nc_hash=AQBkTu0in720fqCa",
          "message": "On October 10, EU lawmakers will vote on a dangerous proposal to change copyright law. We must demand better reforms.",
          "name": "A Copyright Vote That Could Change the EU’s Internet – The Mozilla Blog",
          "id": "262134952380_10155593035472381"
        },
        {
          "full_picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQAdXX3fv2SnuLrE&url=https%3A%2F%2Fbuffer-media-uploads.s3.amazonaws.com%2F59b17f566125c7a0682080b7%2F356a192b7913b04c54574d18c28d46e6395428ab_15acb225fc288be3a10dc98a5b77278d8db915e5_facebook&_nc_hash=AQCdWWUILo176Uw0",
          "message": "We're taking a look at how companies like NASA & 23andMe apply open practices across their product & technology development:",
          "name": "Being Open by Design – Mozilla Open Innovation – Medium",
          "id": "262134952380_10155582209652381"
        },
        {
          "full_picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQCMJ8p4zls_M6d0&url=https%3A%2F%2Fbuffer-media-uploads.s3.amazonaws.com%2F59affc36dbb5eeb64f9ed3d1%2F42c1657fc67121d8b9720886539c2e79a3cbd744_9a9c56e7db4a63eb6b1e484172fd329a69c48be9_facebook&_nc_hash=AQDBS6Ym40Fczgib",
          "message": "Internet comments are broken (but don't have to be). Mozilla and the Washington Post are reinventing online conversations.",
          "name": "Mozilla and the Washington Post Are Reinventing Online Comments – The Mozilla Blog",
          "id": "262134952380_10155579060887381"
        },
        {
          "full_picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQATaqUabJBKtwNd&url=https%3A%2F%2Fbuffer-media-uploads.s3.amazonaws.com%2F59aecd3c90f1ee367aa40821%2Fbf75fb401534bcb1f46393696a9fa569cb50f774_04ebfbfcaf4906c78de18b7c166f1bb1dba82ed0_facebook&_nc_hash=AQB0QnJK1VMBmNeX",
          "message": "We're holding a free #netneutrality panel in San Francisco on September 18. Hear from Tom Wheeler, Denelle Dixon and other experts.",
          "name": "The Battle to Save Net Neutrality: A Panel with Tom Wheeler, Ro Khanna, Mozilla, Leading TV Producers and Others – The Mozilla Blog",
          "id": "262134952380_10155577213607381"
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
              picture={element.full_picture}
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
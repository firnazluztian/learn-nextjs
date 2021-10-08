import MeetUpList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image: 'https://pix10.agoda.net/hotelImages/4869553/0/35b103e869655a2959fac36f614fa08e.jpg?s=1024x768',
    address: 'kuta beach, Bali',
    description: 'this is bali in here we have so many beaches'
  },
  {
    id: 'm2',
    title: 'First Meetup',
    image: 'https://pix10.agoda.net/hotelImages/4869553/0/35b103e869655a2959fac36f614fa08e.jpg?s=1024x768',
    address: 'kuta beach, Bali',
    description: 'this is bali in here we have so many beaches'
  },
  {
    id: 'm3',
    title: 'First Meetup',
    image: 'https://pix10.agoda.net/hotelImages/4869553/0/35b103e869655a2959fac36f614fa08e.jpg?s=1024x768',
    address: 'kuta beach, Bali',
    description: 'this is bali in here we have so many beaches'
  },
]

function HomePage(props) {
  return <MeetUpList meetups={props.meetups} />
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

export default HomePage;
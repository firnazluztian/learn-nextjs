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
    id: 'm1',
    title: 'First Meetup',
    image: 'https://pix10.agoda.net/hotelImages/4869553/0/35b103e869655a2959fac36f614fa08e.jpg?s=1024x768',
    address: 'kuta beach, Bali',
    description: 'this is bali in here we have so many beaches'
  },
  {
    id: 'm1',
    title: 'First Meetup',
    image: 'https://pix10.agoda.net/hotelImages/4869553/0/35b103e869655a2959fac36f614fa08e.jpg?s=1024x768',
    address: 'kuta beach, Bali',
    description: 'this is bali in here we have so many beaches'
  }
]

function HomePage() {
  return <>
    <div style={{margin: '0 auto', width: 700}}>
      <MeetUpList meetups={DUMMY_MEETUPS} />
    </div>
    
  </>
}

export default HomePage;
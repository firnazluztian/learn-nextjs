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
  console.log(props)
  return <MeetUpList meetups={props.meetups} />
}

// both getServerSideProps and getStaticProps can be async
// code wont be run in client side, only on server
// makes it best for authentication key or other purposes that clients side dont need to see

// // better for data that changes frequently or change multiple time every request
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   console.log(req, res);
//   // fetch data from api
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }


// Static Site Generator (SSG)
// Server Side Rendering (SSR)
// faster can define revalidate when to request
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }
}

export default HomePage;
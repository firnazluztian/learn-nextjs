// client side
import MeetUpList from "../components/meetups/MeetupList";
import Head from 'next/head'
// server side
import { getMongoURL } from './utils';
import { MongoClient } from 'mongodb';

function HomePage(props) {
  console.log(props);
  return (
    <>
      <Head>
        <title>React Meetup Next.js</title>
        <meta name="description" content="browse a huge list of highly react meetups" />
      </Head>
      <MeetUpList meetups={props.meetups} />
    </>
  )
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
  // fetch GET here
  const URL = getMongoURL()
  const client = await MongoClient.connect(URL)
  const db = client.db()
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map(item => ({
        title: item.title,
        address: item.address,
        image: item.image,
        id: item._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;

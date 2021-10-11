import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'

// const DUMMY_MEETUPS = {
//   id: 'm1',
//   title: 'First Meetup',
//   image: 'https://pix10.agoda.net/hotelImages/4869553/0/35b103e869655a2959fac36f614fa08e.jpg?s=1024x768',
//   address: 'kuta beach, Bali',
//   description: 'this is bali in here we have so many beaches'
// }

export default function MeetupDetails(props) {
  const meetup = props.meetupsData;
  return (
    <MeetupDetail
      image={meetup.image}
      title={meetup.title}
      description={meetup.description}
      alt={meetup.title}
      address={meetup.address}
    />
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { 
        params: { meetupId: 'm1' }
      },
      { 
        params: { meetupId: 'm2' }
      }
    ]
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log('meetupId', meetupId)
  return {
    props: {
      meetupsData: {
        id: 'm1',
        title: 'First Meetup',
        image: 'https://pix10.agoda.net/hotelImages/4869553/0/35b103e869655a2959fac36f614fa08e.jpg?s=1024x768',
        address: 'kuta beach, Bali',
        description: 'this is bali in here we have so many beaches'
      }
    }
  }
}
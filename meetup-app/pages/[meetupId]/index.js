import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'

const DUMMY_MEETUPS = {
  id: 'm1',
  title: 'First Meetup',
  image: 'https://pix10.agoda.net/hotelImages/4869553/0/35b103e869655a2959fac36f614fa08e.jpg?s=1024x768',
  address: 'kuta beach, Bali',
  description: 'this is bali in here we have so many beaches'
}

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image={DUMMY_MEETUPS.image}
      title={DUMMY_MEETUPS.title}
      description={DUMMY_MEETUPS.description}
      alt={DUMMY_MEETUPS.title}
      address={DUMMY_MEETUPS.address}
    />
  )
}
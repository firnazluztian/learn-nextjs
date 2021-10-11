import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from 'next/head'

// server
import { MongoClient, ObjectId } from 'mongodb'
import { getMongoURL } from '../utils';

export default function MeetupDetails(props) {
  const meetup = props.meetupsData;
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name="description" content={meetup.description} />
      </Head>
      <MeetupDetail
        image={meetup.image}
        title={meetup.title}
        description={meetup.description}
        alt={meetup.title}
        address={meetup.address}
      />
    </>
  );
}

export async function getStaticPaths() {
  const URL = getMongoURL()
  const client = await MongoClient.connect(URL)
  const db = client.db()
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map(item => ({
      params: {
        meetupId: item._id.toString()
      }
    }))
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const URL = getMongoURL()
  const client = await MongoClient.connect(URL)
  const db = client.db()
  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId) })

  

  console.log("meetupId", meetupId);
  return {
    props: {
      meetupsData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      },
    },
  };
}

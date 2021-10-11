import { getMongoURL } from '../constant';
import { MongoClient } from 'mongodb';
// api/new-meetup

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const URL = getMongoURL()
    const client = await MongoClient.connect(URL)

    const db = client.db()
    const meetupsCollection = db.collection('meetups');
    
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup succesfully inserted' })
  }
}

export default handler;


export const getMongoURL = () => {
  const username = 'dbMeetupAdmin';
  const generatedPassword = 'ITasN2HACL80fhiV';
  const dbName = 'meetups'
  const URL = `mongodb+srv://${username}:${generatedPassword}@clustermeetupnextjs.nuwrz.mongodb.net/${dbName}?retryWrites=true&w=majority`
  return URL
}
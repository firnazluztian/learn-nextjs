import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const addMeetupHandler = enteredMeetupData => console.log(enteredMeetupData)

  return <div style={{margin: '0 auto', width: 800}}>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </div>
}

export default NewMeetupPage;
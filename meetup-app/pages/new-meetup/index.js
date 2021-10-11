import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from 'next/head'
import { useRouter } from "next/router";

function NewMeetupPage() {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    console.log('enteredMeetupData', enteredMeetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json' 
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add Meetup</title>
        <meta name="description" content="Add a new list of meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  )
}

export default NewMeetupPage;

import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch('https://react-todo-b62ec-default-rtdb.firebaseio.com/meetups.json', 
    {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        navigate('/'); // Navigate to the homepage after successful form submission
      })
      .catch((error) => {
        console.error('Error adding meetup:', error);
      });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} navigate={navigate}/>
    </section>
  );
}

export default NewMeetupPage;
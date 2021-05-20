import React, {useState} from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSeletedEvent] = useState(null);
  function handleSelectEvent(event){
    setSeletedEvent(event);
    setFormOpen(true);
  }
  function handleCreateEvent(){
    setFormOpen(true);
    setSeletedEvent(null);
  }
  return (
    <>
      <NavBar setFormOpen={handleCreateEvent} />
      <Container className='main'>
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectedEvent={selectedEvent}
          setSeletedEvent={setSeletedEvent}
          handleSelectEvent={handleSelectEvent}
        />
      </Container>
    </>
  );
}

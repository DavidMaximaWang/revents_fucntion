import React, {useState} from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import Sandbox from '../../features/sandbox/Sandbox';

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
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/events/' component={EventDashboard}/>
        <Route exact path='/sandbox/' component={Sandbox}/>
        <Route path='/events/:id' component={EventDetailedPage}/>
        <Route path={['/createEvent', '/manage/:id']} component={EventForm}/>
        
        {/* <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectedEvent={selectedEvent}
          setSeletedEvent={setSeletedEvent}
          handleSelectEvent={handleSelectEvent}
        /> */}
      </Container>
    </>
  );
}

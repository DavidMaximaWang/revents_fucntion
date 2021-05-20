import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm';
import {sampleData} from '../../../app/api/sampleData';

export default function EventDashboard({ formOpen, setFormOpen, handleSelectEvent, selectedEvent, setSeletedEvent }) {
  const [events, setEvents] = useState(sampleData);

  function handleCreateEvent(event) {
    setEvents([...events, event]);
  }
  function handleUpdateEvent(event){
    setEvents(events.map(evt=>evt.id === event.id? event: evt) );
  }

  function handleDeleteEvent(event){
    setEvents(events.filter(evt=>evt.id !== event.id) );
  }
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={handleSelectEvent} deleteEvent={handleDeleteEvent}/>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
            key={selectedEvent ? selectedEvent.id: null}
            updateEvent={handleUpdateEvent}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}

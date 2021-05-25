import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';
import { useSelector } from 'react-redux';

export default function EventDetailedPage({ match }) {
  const id = match.params.id;
  const event = useSelector((state) => state.event.events.find((event) => event.id === id));
  return (
    <>
      <Grid>
        <Grid.Column width={10}>
          <EventDetailedHeader event={event}/>
          <EventDetailedInfo  event={event}/>
          <EventDetailedChat/>
        </Grid.Column>
        <Grid.Column width={6}>
          thisisgood
          <EventDetailedSidebar  event={event}/>
        </Grid.Column>
      </Grid>
    </>
  );
}

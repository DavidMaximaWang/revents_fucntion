import cuid from 'cuid';
import React, { useState } from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';

export default function EventForm({ setFormOpen, setEvent, createEvent, selectedEvent, updateEvent}) {
  const initialValues= selectedEvent ?? {
    title:'',
    category:'',
    description:'',
    city:'',
    venue:'',
    date:'',
  }
  const [values, setValues] = useState(initialValues);
  function handleInputChange(e){
    const {name, value} = e.target;
    setValues({...values, [name]:value})
  }
  function handleFormSubmit(){
    if(selectedEvent){
      updateEvent({...selectedEvent, ...values});
    }else
    {
      createEvent({...values, id: cuid(), hostedBy:'Tom', hostPhotoURL:'/assets/user.png'});
    }
    setFormOpen(false);
  }
  return (
    <Segment clearing>
      <Header content='Create new event' />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input name='title' type='text' value={values.title} onChange={handleInputChange} placeholder='Event title' />
        </Form.Field>
        <Form.Field>
          <input name='category'type='text' value={values.category} onChange={handleInputChange}  placeholder='Category' />
        </Form.Field>
        <Form.Field>
          <input name='description' type='text' value={values.description} onChange={handleInputChange}  placeholder='Description' />
        </Form.Field>
        <Form.Field>
          <input name='city' type='text' value={values.city} onChange={handleInputChange}  placeholder='City' />
        </Form.Field>
        <Form.Field>
          <input name='venue' type='text' value={values.venue} onChange={handleInputChange} placeholder='Venue' />
        </Form.Field>
        <Form.Field>
          <input name='date' type='date' value={values.date} onChange={handleInputChange} placeholder='Date' />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          onClick={() => setFormOpen(false)}
          type='submit'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
}

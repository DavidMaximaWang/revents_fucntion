import { createEvent } from '@testing-library/dom';
import cuid from 'cuid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Segment, Header, Button, FormField, Label } from 'semantic-ui-react';
import { updateEvent } from '../eventDashboard/eventActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function EventForm(props) {
  const { handleSubmit, match, history } = props;
  const selectedEvent = useSelector((state) => state.event.events.find((evt) => evt.id === match.params.id));
  const dispatch = useDispatch();

  const initValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };
  const validationSchema = Yup.object({
    title: Yup.string().required('You must provide a title'),
  });
  const [values, setValues] = useState(initValues);
  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  function handleFormSubmit() {
    if (selectedEvent) {
      dispatch(updateEvent({ ...selectedEvent, ...values }));
    } else {
      dispatch(createEvent({ ...values, id: cuid(), hostedBy: 'Tom', hostPhotoURL: '/assets/user.png' }));
    }
    history.push('/events');
  }
  return (
    <Segment clearing>
      <Header content='Create new event' />
      <Formik
        initialValues={initValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className='ui form'>
          <FormField>
            <Field name='title' placeholder='Event title'></Field>
            <ErrorMessage name='title' render={(error) => <Label basic color='red' content={error}></Label>} />
          </FormField>
          <FormField>
            <Field name='category' placeholder='Category'></Field>
          </FormField>
          <FormField>
            <Field name='description' placeholder='Description'></Field>
          </FormField>
          <FormField>
            <Field name='city' placeholder='City'></Field>
          </FormField>
          <FormField>
            <Field name='venue' placeholder='Venue'></Field>
          </FormField>
          <FormField>
            <Field name='date' placeholder='Date' type='date'></Field>
          </FormField>

          <Button type='submit' floated='right' positive content='Submit' />
          <Button as={Link} to='/events' type='submit' floated='right' content='Cancel' />
        </Form>
      </Formik>
    </Segment>
  );
}

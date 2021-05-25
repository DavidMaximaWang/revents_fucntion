import cuid from 'cuid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Segment, Header, Button } from 'semantic-ui-react';
import { createEvent, updateEvent } from '../eventDashboard/eventActions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from '../../../app/common/form/MyTextArea';
import { categoryData } from '../../../app/api/categoryOptions';
import MySelectInput from '../../../app/common/form/MySelectInput';
import MyDateInput from '../../../app/common/form/MyDateInput';

export default function EventForm(props) {
  const { match, history } = props;
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
    category: Yup.string().required('You must provide a category'),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required(),
  });

  function handleFormSubmit() {}

  return (
    <Segment clearing>
      <Header content='Create new event' />
      <Formik
        initialValues={initValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (selectedEvent) {
            dispatch(updateEvent({ ...selectedEvent, ...values }));
          } else {
            dispatch(createEvent({ ...values, id: cuid(), hostedBy: 'Tom', hostPhotoURL: '/assets/user.png' }));
          }
          history.push('/events');
        }}
      >
        <Form className='ui form'>
          <MyTextInput name='title' label='title' placeholder='Event title'></MyTextInput>
          <MySelectInput name='category' placeholder='Event category' options={categoryData} />
          <MyTextArea name='description' placeholder='Description' rows={3} />
          <MyTextInput name='city' placeholder='City'></MyTextInput>

          <MyTextInput name='venue' placeholder='Venue'></MyTextInput>
          <MyDateInput
            name='date'
            placeholder='Date'
            type='date'
            timeFormat='HH:mm'
            showTimeSelect
            timeCaption='time'
            dateFormat='MMMM d, yyyy h:mm a'
          ></MyDateInput>

          <Button type='submit' floated='right' positive content='Submit' />
          <Button as={Link} to='/events' type='submit' floated='right' content='Cancel' />
        </Form>
      </Formik>
    </Segment>
  );
}

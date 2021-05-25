import isValid from 'date-fns/isValid';
import { Formik, Form } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import * as Yup from 'yup';
import MyTextInput from '../../app/common/form/MyTextInput';
import { closeModal } from '../../app/common/modals/modalReducer';
import ModalWrapper from '../../app/common/modals/ModalWrapper';
import { signInUser } from './authActions';

export default function () {
  const dispatch = useDispatch();
  
  return (
    <ModalWrapper>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          // email: Yup.string().required().email(),
          email: Yup.string().required(),
          password: Yup.string().required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(signInUser(values));
          setSubmitting(false);
          dispatch(closeModal());
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form class='ui form'>
            <MyTextInput name='email' placeholder='Email' />
            <MyTextInput name='password' placeholder='Password' type='password' />
            <Button
              loading={isSubmitting}
              type='submit'
              content='Submit'
              disabled={isSubmitting || !isValid || !dirty}
              size='large'
              color='teal'
            />
            <Button type='cancel' content='Cancel' />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
}

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from '../../app/common/modals/modalReducer';
import { decrement,  increment, } from './testReducer';

export default function Sandbox(){
  
  const data = useSelector((state) => state.test.data)
  const dispatch = useDispatch();
  
  return (
    <>
    <h1>data is {data} </h1>
    <Button onClick={()=>dispatch(increment(30))}> Increment</Button>
    <Button onClick={()=>dispatch(decrement(10))}> Decrement</Button>
    <Button
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
        }
        content='Open Modal'
        color='teal'
      />
          <Button
        onClick={() =>
          dispatch(openModal({ modalType: 'Login', modalProps: { email:'', password:'' } }))
        }
        content='Open Modal'
        color='teal'
      />
    </>
  )
}
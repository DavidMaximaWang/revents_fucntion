import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Button, Segment } from 'semantic-ui-react';
import { decrement, DECREMENT_COUNTER, increment, INCREMENT_COUNTER } from './testReducer';

export default function Sandbox(){

  const data = useSelector(state=>{
    return state.test.data});
  const dispatch = useDispatch();
  return (
    <>
    <h1>data is {data} </h1>
    <Button onClick={()=>dispatch(increment(30))}> Increment</Button>
    <Button onClick={()=>dispatch(decrement(10))}> Decrement</Button>
    </>
  )
}
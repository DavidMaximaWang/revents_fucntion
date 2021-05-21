import React from 'react';
import {useSelector} from 'react-redux';
import { Button, Segment } from 'semantic-ui-react';

export default function Sandbox(){
  const data = useSelector(state=>state.data);
  return (
    <>
    <h1>data is {data} </h1>
    <Button ></Button>
    </>
  )
}
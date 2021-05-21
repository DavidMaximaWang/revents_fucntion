import {createStore} from 'redux';
import { testReducer } from '../../features/sandbox/testReducer';


export default function configureStore(){
  return createStore(testReducer)
}
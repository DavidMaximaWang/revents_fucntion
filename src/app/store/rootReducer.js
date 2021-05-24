import { combineReducers } from 'redux';
import { eventReducer } from '../../features/events/eventDashboard/eventReducer';
import { testReducer } from '../../features/sandbox/testReducer';

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
});

export default rootReducer;

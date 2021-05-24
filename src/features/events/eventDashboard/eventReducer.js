import { sampleData } from '../../../app/api/sampleData';
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventContstants';

const initState = {
  events: sampleData,
};
export function eventReducer(state = initState, { type, payload }) {
  switch (type) {
    case UPDATE_EVENT:
      return { ...state, events: [...state.events.filter((event) => event.id !== payload.id), payload] };
    case CREATE_EVENT:
      return { ...state, events: [...state.events, payload] };
    case DELETE_EVENT:
      return { ...state, events: [...state.events.filter((event) => event.id !== payload)] };
    default:
      return state;
    }
}

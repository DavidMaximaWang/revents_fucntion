const initState = { data: 33 };
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment(amount){
  return {type: INCREMENT_COUNTER, payload:amount}
}
export function decrement(amount){
  return {type: DECREMENT_COUNTER, payload:amount}
}

export function testReducer(state = initState, {type, payload}) {
  switch (type) {
    case INCREMENT_COUNTER:
      return { ...state, data: state.data + payload };
    case DECREMENT_COUNTER:
      return { ...state, data: state.data - payload };
  }
    return state;
}

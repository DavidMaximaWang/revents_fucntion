export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

const initialState = {
  authenticated: true,
  currentUser: {email:"bob@aa.com"},
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          photoURL: '/assets/user.png',
        },
      };
    case SIGN_OUT_USER: {
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };
    }
    default:
      return state;
  }
}

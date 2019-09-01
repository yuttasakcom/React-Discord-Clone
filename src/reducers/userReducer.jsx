import { ACTION } from '../actions/types';

const initialState = {
  isSignedIn: false,
  isAdmin: false,
  userId: null,
  userName: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload.userId, userName: action.payload.userName };
    case ACTION.SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null, userName: 'anon' + Math.floor(Math.random(0) * 100) };
    default:
      return state;
  }
};

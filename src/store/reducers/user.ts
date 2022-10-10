import {
  SET_USER,
  USER_LOGOUT,
} from '../actions/users'

const initialState = {
  user: {
    id: null,
    fullName: null,
    email: null,
    avatar: null,
  },
  token: '',
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      }

    case USER_LOGOUT:
      return {
        ...state,
        user: [],
        token: '',
      }

    default:
      return state
  }
}

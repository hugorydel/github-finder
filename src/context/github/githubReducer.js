import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from '../types';

//reducer
export default (state, action) => {
  console.log(`Dispatched: ${action.type} Payload:`, action.payload);
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      break;
  }
};

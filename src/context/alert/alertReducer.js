import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
  console.log(`Dispatched: ${action.type} Payload:`, action.payload);
  switch (action.type) {
    case SET_ALERT:
      //Returns the message and its type
      return action.payload;
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};

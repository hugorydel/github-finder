import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

//Global state for anything that has to do with github
const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setAlert = (message, type) => {
    dispatch({ type: SET_ALERT, payload: { message, type } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  //Creates global context that can be accessed from anywhere by use of imports
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

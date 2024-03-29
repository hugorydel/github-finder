import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

//Passed in as props into Search
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  //Pull out whatever you want to be the state (in our case text) and then we take out a method for changing the state which can be called anything but for the sake of clarity will be called setText
  const [text, setText] = useState('');
  //We use arrow functions here because then the this keyword refers to the state.text of the Search component whereas if we used onSubmit() this would refer to the function itself which of course has no state.text of its own so an error would ensue
  const onSubmit = eventParam => {
    //This makes it so as we don't just submit to a file like we would by default
    eventParam.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      //this.props works and finds the searchUsers function because we've set the this
      //The search class has a props object which we input our method into in the App.js main file.
      githubContext.searchUsers(text);
      //After searching for the users we want we will clear the search bar
      setText('');
    }
  };

  //On any change in the Search bow there will be a new thing passed into this eventParam which then will be set as the new state of the value
  const onChange = eventParam => {
    //the thing we type into the search box can be accessed by x.target.value
    setText(eventParam.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          value={text}
          placeholder='Search For Users...'
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

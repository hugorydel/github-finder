/** @format */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = { text: '' };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  //We use arrow functions here because then the this keyword refers to the state.text of the Search component whereas if we used onSubmit() this would refer to the function itself which of course has no state.text of its own so an error would ensue
  onSubmit = eventParam => {
    //This makes it so as we don't just submit to a file like we would by default
    eventParam.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      //this.props works and finds the searchUsers function because we've set the this
      //The search class has a props object which we input our method into in the App.js main file.
      this.props.searchUsers(this.state.text);
      //After searching for the users we want we will clear the search bar
      this.setState({ text: '' });
    }
  };

  //On any change in the Search bow there will be a new thing passed into this eventParam which then will be set as the new state of the value
  onChange = eventParam => {
    //the thing we type into the search box can be accessed by x.target.value
    this.setState({ text: eventParam.target.value });
  };

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            value={this.state.text}
            placeholder='Search For Users...'
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;

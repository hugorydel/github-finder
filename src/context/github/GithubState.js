import React, { userReducer, useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubContext';
import {
	SEARCH_USERS,
	GET_USER,
	CLEAR_USERS,
	GET_REPOS,
	SET_LOADING,
} from '../types';

//Global state for anything that has to do with github
const GithubState = props => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	//Search Users

	//Get User

	// Get Repos

	// Clear Users

	// Set Loading

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
			}}>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;

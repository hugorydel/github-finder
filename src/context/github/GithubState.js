import React, { userReducer, useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
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

	const searchUsers = async text => {
		setLoading(true);

		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		dispatch({ type: SEARCH_USERS, payload: res.data.items });
	};

	//Get User
	const getUser = async username => {
		setLoading();

		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		dispatch({ type: GET_USER, payload: res.data });
	};

	// Get Repos

	// Clear users
	const clearUsers = () => dispatch({ type: CLEAR_USERS });

	// Set Loading

	const setLoading = () => dispatch({ type: SET_LOADING });

	//Creates global context that can be accessed from anywhere
	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				searchUsers,
				setLoading,
				clearUsers,
				getUser,
			}}>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
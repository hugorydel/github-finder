/** @format */
import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

export const Repos = ({ repos }) => {
  //You need a key for each repo because in all the repos are a list and the key numbers the list accordingly.
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;

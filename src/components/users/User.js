/** @format */

import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    const { getUser, match, getUserRepos } = this.props;
    //Here we're calling the Class's props which now contains getUser as in App.js we passed it into here.
    //React Router will supply any dynamic pieces of the URL to the component via an object called match.params as own props of the related component which means that we can access the login
    //The param of login is the path that we've set in App.js = "/user/:login"
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }
  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
  };

  render() {
    //Pulls all the data gathered from the user
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      company
    } = this.props.user;

    const { loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              alt=''
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>
              <strong>Location:</strong> {location}
            </p>
          </div>
          <div>
            {bio ? (
              <Fragment>
                <h3>Bio</h3>
                <p> {bio} </p>
              </Fragment>
            ) : null}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong>
                    {login}
                  </Fragment>
                )}
              </li>
            </ul>
            <ul>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong>
                    {company}
                  </Fragment>
                )}
              </li>
            </ul>
            <ul>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong>
                    <a href={blog}>{blog}</a>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-hug'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
      </Fragment>
    );
  }
}

export default User;

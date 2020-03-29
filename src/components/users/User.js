/** @format */

import React, { Component } from 'react';

export class User extends Component {
  componentDidMount() {
    const { getUser, match } = this.props;
    //Here we're calling the Class's props which now contains getUser as in App.js we passed it into here.
    //React Router will supply any dynamic pieces of the URL to the component via an object called match.params as own props of the related component which means that we can access the login
    //The param of login is the path that we've set in App.js = "/user/:login"
    getUser(match.params.login);
  }
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
      hireable
    } = this.props.user;

    const { loading } = this.props;

    return <div>{name}</div>;
  }
}

export default User;

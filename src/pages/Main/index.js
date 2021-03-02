/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import SignIn from '../Auth/SignIn';

export default class Main extends Component {
  render() {
    return (
      <div className="loginComponent">
        <SignIn />
      </div>
    );
  }
}

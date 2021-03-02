import React, { Component, Fragment } from 'react';
import GlobalStyle from '../styles/global';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <GlobalStyle>
          <div>
            <p>Login</p>
            <input type="text" />
            <br />
            <p>Senha</p>
            <input type="password" />
          </div>
        </GlobalStyle>
      </>
    );
  }
}

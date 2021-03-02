import React, { Component } from 'react';
import Button from '../../../styles/components/Buttons';

// eslint-disable-next-line react/prefer-stateless-function
export default class SignIn extends Component {
  render() {
    return (
      <div>
        <h1>Seja Bem-vindo</h1>
        <span>User</span>
        <input type="email" name="email" />
        <span>Senha</span>
        <input type="password" />
        <Button size="big" type="submit">Entrar</Button>
      </div>
    );
  }
}

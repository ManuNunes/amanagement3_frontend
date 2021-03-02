import React, { Component } from 'react';
import Button from '../../../styles/components/Buttons';

// eslint-disable-next-line react/prefer-stateless-function
export default class SignIn extends Component {
  render() {
    return (
      <div className="container">
        <div className="box_login">
          <div className="login_title">
            <h1>Bem-vindo</h1>
            <h3> Faça o login</h3>
          </div>
          <div className="input_box">
            <input type="email" name="email" className="input_login" />
            <h3>Senha</h3>
            <input type="password" className="input_login" />
          </div>
          <h3>User</h3>
          <Button size="big" type="submit">Entrar</Button>
        </div>
        <div className="logo">
          <div className="logo_title" />
        </div>

      </div>

    );
  }
}

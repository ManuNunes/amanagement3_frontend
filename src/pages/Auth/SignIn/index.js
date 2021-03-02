import React, { Component } from 'react';
import Button from '../../../styles/components/Buttons';

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div onSubmit={handleSubmit}>
        <h1>Seja Bem-vindo</h1>
        <span>User</span>
        <input type="email" name="email" value={email} onChange={this.handleInputChange} />
        <span>Senha</span>
        <input type="password" name="password" value={password} onChange={this.handleInputChange} />
        <Button size="big" type="submit">Entrar</Button>
      </div>
    );
  }
}

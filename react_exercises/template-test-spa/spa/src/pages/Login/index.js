import React, { Component } from 'react';

import './styles.css';

class Login extends Component {
  
  state = {
    name: '',
    observation: '',
    rg: '',
    password: '',
  }

  handleSubmit = (event) => {

    console.log('passou');

    this.props.history.push('/show', {
      data_login: this.state
    });
  }

  render () {
    return (
      <div className="login">
        <div className="box">
          <p>Cadastrar novo</p>
          <div className="sign-up">
            <input 
              type="text" 
              name="name" 
              value={this.state.name} 
              onChange={event => this.setState({...this.state, name: event.target.value})} 
              placeholder="Nome"
            />
            <input 
              type="type" 
              name="observation" 
              value={this.state.observation} 
              onChange={event => this.setState({...this.state, observation: event.target.value})}
              placeholder="Observação"
            />
            <input 
              type="type" 
              name="rg" 
              placeholder="RG" 
              onChange={event => this.setState({...this.state, rg: event.target.value})}
              value={this.state.rg} 
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Senha" 
              onChange={event => this.setState({...this.state, password: event.target.value})}
              value={this.state.password}
            />
          </div>
          <div className="footer">
            <button 
              className="submit" 
              type="submit" 
              onClick={this.handleSubmit}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    );
  }

}

export default Login;
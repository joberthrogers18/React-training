import React, { Component } from 'react';

import './styles.css';

class Login extends Component {
  
  render () {
    return (
      <div className="login">
        <div className="box">
          <p>Cadastrar novo</p>
          <div className="sign-up">
            <input type="text" name="name" placeholder="Nome"/>
            <input type="type" name="observation" placeholder="Observação"/>
            <input type="type" name="rg" placeholder="RG" />
            <input type="password" name="password" placeholder="Senha"/>
          </div>
          <div className="footer">
            <button className="submit" type="submit">Enviar</button>
          </div>
        </div>
      </div>
    );
  }

}

export default Login;
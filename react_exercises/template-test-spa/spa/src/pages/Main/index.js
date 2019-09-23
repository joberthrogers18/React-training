import React, { Component } from 'react';

import './styles.css';

class Main extends Component {

  state = { 
    name: '',
    observation: '',
    password: '',
    rg:'',
  }

  componentDidMount(){
    this.setState(this.props.location.state.data_login);
  }

  renderItens = () => {
    
    let itens = []
    for (let i = 0; i < 5; i++){ 
      itens.push(
        <div key={i} className="wrapper">
          <div className="number">{i}</div>
          <div className="body-list">
            <p className="name">Nome: <span>{this.state.name}</span></p>
            <p className="observation">Observação: <span>{this.state.observation}</span></p>
            <div className="fotter">
              <p className="password">Senha: <span>{this.state.password}</span></p>
              <p className="rg">RG: <span>{this.state.rg}</span></p>
            </div>
          </div>
        </div>
      )
    }

    return itens;
  }

  render(){
    return(
      <div className="list-ground">
        <div className="list-inside">
          {this.renderItens()}
        </div>  
      </div>
    )
  }

}

export default Main;
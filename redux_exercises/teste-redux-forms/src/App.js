import React from "react";
import "./App.css";
// import SumApp from './app/containers/sum_container';
import TesteForm from './app/containers/TesteForm';
import { connect } from 'react-redux';
import  { formValueSelector } from 'redux-form';
import axios from 'axios';

function App({ name, password }) {

  async function handleSubmit(e) 
  {

    e.preventDefault();
    console.log(name, password);
  
    const response = await axios({
      method: 'get',
      url: 'https://api.github.com/user/repos?affiliation=owner',
      auth: {
        username: 'joberthrogers18',
        password: 'j23231215',
      },
      headers: {
        Accept: 'application/vnd.github.nebula-preview+json'
      }
    })

    console.log(response);
  }

  return ( 
    <div className = "App" >
      {/* <SumApp /> */}
      <TesteForm handleSubmit={handleSubmit} />
    </div >
  );
}

const selector = formValueSelector('teste');
const mapStateToProps = state => {
  const name = selector(state, 'name');
  const password = selector(state, 'password');

  return {
    name,
    password
  }
}

export default connect(mapStateToProps)(App);
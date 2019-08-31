import React, { Component } from 'react';
//import { Provider } from 'react-redux';
import './App.css';

//import store from './store/reducers'
import Navbar from './components/NavBar';
import Show from './components/Show';

class App extends Component {
  
  render () {
    return (
      <div className="App">
        <Navbar />
        <Show />
      </div>
    );
  }
  
}

export default App;

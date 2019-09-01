import React, { Component } from 'react';
import './App.css';

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

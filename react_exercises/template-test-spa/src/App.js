import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Content from './components/content';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Content />
    </div>
  );
}

export default App;

import React from 'react';

import './styles.css';
import cellphoneimage from '../../assets/cellphones.png';

function Jumbotron(){
  return (
    <div className="jumbotron">
      <p className="main-text">Get high Conversions</p>
      <p className="main-text">From your lading pages</p>
      <button type="button" className="button-jumbotron">Click here to start now</button>
      <img className="image-jumbotron" src={cellphoneimage} alt="conteúdos em smartphones"/>
    </div>
  );
}

export default Jumbotron;
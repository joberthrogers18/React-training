import React from 'react';

import './styles.css';

function Content(){

  return (
    <div>
      <p className="main-title">Whats in the course?</p>
      <ul className="pointers">
        <li>
          <div className="number">1</div>
          <div className="content">
            <p className="title">Lading Page 101</p>
            <p className="explain">The values are a space separated list
              , where each value specifies the size of the respective column.</p>
          </div>
        </li>
        <li>
          <div className="number">1</div>
          <div className="content">
            <p className="title">Lading Page 101</p>
            <p className="explain">The values are a space separated list
              , where each value specifies the size of the respective column.</p>
          </div>
        </li>
        <li>
          <div className="number">1</div>
          <div className="content">
            <p className="title">Lading Page 101</p>
            <p className="explain">The values are a space separated list
              , where each value specifies the size of the respective column.</p>
          </div>
        </li>
        <li>
          <div className="number">1</div>
          <div className="content">
            <p className="title">Lading Page 101</p>
            <p className="explain">The values are a space separated list
              , where each value specifies the size of the respective column.</p>
          </div>
        </li>
      </ul>
    </div>
  );

}

export default Content;
import React, { Component } from "react";

// import { Container } from './styles';

export default class main extends Component {
  render() {
    return (
      <div className="panel">
        <button className="btn-max-1">AC</button>
        <button className="signals">/</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="signals">*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="signals"> - </button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="signals">+</button>
        <button className="btn-max-2">0</button>
        <button>.</button>
        <button className="signals"> = </button>
      </div>
    );
  }
}

import React, { Component } from 'react';

import './styles.css';

class Main extends Component {

  componentDidMount(){
    console.log(this.props.location.state)
  }

  render(){
    return(
      <h1>Main</h1>
    )
  }

}

export default Main;
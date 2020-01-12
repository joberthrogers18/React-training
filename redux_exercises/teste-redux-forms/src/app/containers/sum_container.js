import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addOne from '../actions';

const sumContainer = ({ number, addOne }) => {
  return(
    <div>
      <h1>{ number }</h1>
      <button onClick={() => addOne(number)}>Click</button>
    </div>
  )
}

const mapStateToProps = state => ({
  number: state.sum.number  
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addOne }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(sumContainer);
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; // link the actions creations to dispatchers

import {changeValue} from './fieldActions';

class Field extends Component {

    render(){
        return(
            <div>
                <label>{this.props.value}</label><br/>
                <input onChange={this.props.changeValue} value={this.props.value} ></input>
            </div>
        )
    }

}

function mapStateToProps(state){ //map the attributes in my store to my props component *** it very important in redux
    return {
        value: state.field.value //load this value from reducers to props here
    }
}

function mapDispatchToProps(dispatch){ // mapping the action creators to props
    return bindActionCreators({ changeValue }, dispatch); // first parameter is all Actions creators and second the dispach(the actions)
}

//pattern design call decorator
export default connect(mapStateToProps, mapDispatchToProps)(Field) // connect react part with redux function
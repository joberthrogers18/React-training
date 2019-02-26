import React, {Component} from 'react';
import { connect } from 'react-redux';

class Field extends Component {

    render(){
        return(
            <div>
                <label>{this.props.value}</label><br/>
                <input onChange={this.handleChange} value={this.props.value} ></input>
            </div>
        )
    }

}

function mapStateToProps(state){ //map the attributes in my store to my props component *** it very important in redux
    return {
        value: state.field.value //load this value from reducers to props here
    }
}

//pattern design call decorator
export default connect(mapStateToProps)(Field) // connect react part with redux function
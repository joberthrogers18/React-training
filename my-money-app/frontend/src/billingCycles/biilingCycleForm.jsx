import React, {Component} from 'react';
//Field is to control the fields of my form
import { reduxForm, Field } from 'redux-form'; //reduxForm here import is like "connect" in other components in react when using redux to link the component with state with manager redux 
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import labelAndInput from '../common/form/labelAndInput';
import { init } from './billingCyclesAction';


class BillingCyclesForm extends Component{

    render(){
        const { handleSubmit } = this.props //method avaiable when we use the redux form

        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} 
                        label='Nome'cols='12 4' placeholder='Informe o nome'/> {/* The parameters pass here will got to props in component "labelAndInput" */}

                    <Field name='month' component={labelAndInput} type='number'
                        label='Mês' cols='12 4' placeholder='Informe o mês'/> {/* The parameters pass here will got to props in component "labelAndInput" */}

                    <Field name='year' component={labelAndInput} type='number'
                        label='ano' cols='12 4' placeholder='Informe o ano'/> {/* The parameters pass here will got to props in component "labelAndInput" */}
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary spacing-button'>Submit</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init} >Cancelar</button>
                </div>
            </form>
        )
    }

}

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch);


                        //id of my form             // No destroy the data in form when it is destroy and could use when the component is instanciate again for another case
BillingCyclesForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCyclesForm);
//Decorate the form with redux form

export default connect(null, mapDispatchToProps)(BillingCyclesForm);     
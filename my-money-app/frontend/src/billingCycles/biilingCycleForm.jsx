import React, {Component} from 'react';
//Field is to control the fields of my form
import { reduxForm, Field, formValueSelector } from 'redux-form'; //reduxForm here import is like "connect" in other components in react when using redux to link the component with state with manager redux 
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import LabelAndInput from '../common/form/labelAndInput';
import { init } from './billingCyclesAction';
import ItemList from './itemList'
import Summary from './summary';

class BillingCyclesForm extends Component{

    calculateSummary(){
        const sum = (total, actualValue) => total + actualValue;

        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum), //map and reduce are functions from javascript    
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render(){
        const { handleSubmit, readOnly, credits, debts } = this.props //the method "handleSubmit" is avaiable when we use the redux form
        const {sumOfCredits, sumOfDebts } = this.calculateSummary()

        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly} //the readOnly go to the component LabelAndInput 
                        label='Nome'cols='12 4' placeholder='Informe o nome'/> {/* The parameters pass here will got to props in component "LabelAndInput" */}

                    <Field name='month' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês'/> {/* The parameters pass here will got to props in component "LabelAndInput" */}

                    <Field name='year' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='ano' cols='12 4' placeholder='Informe o ano'/> {/* The parameters pass here will got to props in component "LabelAndInput" */}
                
                    <Summary credit={sumOfCredits} debt={sumOfDebts}/>

                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        field='credits' legend='Créditos'/>
                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                        field='debts' legend='Débitos' showStatus={true}/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init} >Cancelar</button>
                </div>
            </form>
        )
    }

}

                        //id of my form             // No destroy the data in form when it is destroy and could use when the component is instanciate again for another case
BillingCyclesForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCyclesForm);
//Decorate the form with redux form

const selector = formValueSelector('billingCycleForm') //take the value data saved in state controlled in redux form and throw to props in this component

const mapStateToProps = state => ({
                credits: selector(state, 'credits'),
                debts: selector(state, 'debts')
}) // take the list of credits and debts using the selector to take in state controled by redux form

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(BillingCyclesForm);     
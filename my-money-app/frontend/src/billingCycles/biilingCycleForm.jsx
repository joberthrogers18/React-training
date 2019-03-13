import React, {Component} from 'react';
//Field is to control the fields of my form
import { reduxForm, Field } from 'redux-form'; //reduxForm here import is like "connect" in other components in react when using redux to link the component with state with manager redux 
import labelAndInput from '../common/form/labelAndInput';

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
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }

}
                        //id of my form
export default reduxForm({form: 'billingCycleForm'})(BillingCyclesForm);
//Decorate the form with redux form
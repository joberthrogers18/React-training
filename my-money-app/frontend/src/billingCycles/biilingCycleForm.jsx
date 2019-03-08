import React, {Component} from 'react';
//Field is to control the fields of my form
import { reduxForm, Field } from 'redux-form'; //reduxForm here import is like "connect" in other components in react when using redux to link the component with state with manager redux 


class BillingCyclesForm extends Component{

    render(){
        const { handleSubmit } = this.props //method avaiable when we use the redux form

        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component='input' />
                    <Field name='month' component='input' />
                    <Field name='year' component='input' />
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
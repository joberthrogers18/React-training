import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form'; //reset the form
import { showTabs, selectTab } from '../common/tab/tabAction';

const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VALUES = {credits: [{}]}

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`);

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values){
    return submit(values, 'post')
}

export function update(values){
    return submit(values, 'put')
}

export function remove(values){
    return submit(values, 'delete')
}

function submit(values, methods){
    return dispatch => {
        
        const id = values._id ? values._id : ''; // if there is an id means that the element already exist, if isn't the method is post and we put in id a value ''(empty)

        axios[methods](`${BASE_URL}/billingCycles/${id}`, values) // in javascript the notation axios[method] is the same of axios.post or axios.put
            .then(resp => {
                toastr.success('Sucesso', 'Operação feita com sucesso');

                //the dispatch receive only actions creators, e the array is becaus the redux multi and i can dispatch several actions because that
                dispatch(init())

            }).catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error));
            })
    }
}


export function showUpdate(billingCycle){
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle) // the values that i will put in form
    ]
}

// The function above and down here are duplicate, after we have to refactory

export function showDelete(billingCycle){
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}
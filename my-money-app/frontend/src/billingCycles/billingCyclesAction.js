import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm} from 'redux-form'; //reset the form
import { showTabs, selectTab } from '../common/tab/tabAction';

const BASE_URL = 'http://localhost:3003/api';

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`);

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values){

    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação feita com sucess');

                //the dispatch receive only actions creators, e the array is becaus the redux multi and i can dispatch several actions because that
                dispatch([
                    resetForm('billingCycleForm'), //id added in billing cycle forms
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])

            }).catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error));
            })
    }

    return {
        type: 'TEMP'
    }
}
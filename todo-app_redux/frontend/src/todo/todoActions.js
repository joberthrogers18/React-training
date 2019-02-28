import axios from 'axios';

const URL = "http://localhost:3003/api/todos";

export const changeDescription = event => ({
    type: 'DESCRIPTION CHANGED',
    payload: event.target.value 
})

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`);

    return {
        type: 'TODO_SEARCHED',
        payload: request
    };
}

export const add = (description) => {

    return dispatch => { // to send to all reducers and wait for a request assync we need return a method
        const request = axios.post(URL, {description: description})
            .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data }))
            .then( resp => dispatch(search())); // description: description, like is the same name we can let { description }
    }
}
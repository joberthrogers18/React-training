import axios from 'axios';

const URL = "http://localhost:3003/api/todos";

export const changeDescription = event => ({
    type: 'DESCRIPTION CHANGED',
    payload: event.target.value 
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description;// how i cant access by parameter the description  in store, i use this to take it
        const search = description ? `&description__regex=/${description}/` : '';
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data}))
    }

}

export const add = (description) => {

    return dispatch => { // to send to all reducers and wait for a request assync we need return a method
        const request = axios.post(URL, {description: description})
            .then(resp => dispatch(clear()))
            .then( resp => dispatch(search())); // description: description, like is the same name we can let { description }
    }
}

export const markAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp => dispatch(search()))
    }
}

export const remove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{type: 'TODO_CLEAR'}, search()]
}
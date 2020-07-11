import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'PLUS':
            return {...state, counter: state.counter + 1, clicks: state.clicks + 1 }
        case 'MINUS':
            return {...state, counter: state.counter -1, clicks: state.clicks + 1}
        default:
            return state;
    }
}

const initialValue = {
    counter: 0,
    clicks: 0
}

export default function UseReducerExample() {

    // first parameter => function reducer to create a new state according the payload
    // second parameter => value initial of reducer element
    // third parameter => function to deal with initial value
    // THIS FUNCTION RETURN THE VALUE OF REDUCER AND FUNCTION TO DISPATCH ACTION
    // const reducer = useReducer(
    //     function(state, action) {},
    //     'Jobs',
    //     function(initialValue) {
    //         return { name: initialValue };
    //     },
    // );

    const [state, dispatch]  = useReducer(reducer, initialValue);

    function handlePlus(){
        dispatch({ type: 'PLUS' })
    }

    function handleMinus() {
        dispatch({ type: 'MINUS' })
    }

    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                <h1>{ state.counter }</h1>
                <h4>Cliques: { state.clicks }</h4>
                <button onClick={handlePlus}>+</button>
                <button onClick={handleMinus}>-</button>
            </div>
        </div>
    )
} 
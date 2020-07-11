import React, { useState, useCallback } from 'react';

const fnCounter = new Set();

export default function UseCallbackExample() {
    const [counter, setCounter] = useState(0);

    // function handlePlus() {
    //     setCounter((prevState) => prevState + 1);
    // }

    // create usually just one instance of function
    // used when gonna pass the callback to a child component
    // cause it memorize the function for not create new instance all the time
    const handlePlus = useCallback(() => {
        setCounter((prevState) => prevState + 1);
    }, [])

    fnCounter.add(handlePlus);
    console.log(fnCounter.size)
    console.log(fnCounter);

    return (
        <div>
            <h1>UseCallback example</h1>
            <h1>{counter}</h1>
            <Button onClick={handlePlus} />
        </div>
    )
}

function Button(props) {
    return (
        <button onClick={props.onClick}>+</button>
    )
}
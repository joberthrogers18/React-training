import React, { useState, useMemo } from 'react';

export default function UseMemoExample() {
    const [counter, setCounter] = useState(1);
    const [name, setName] = useState('');

    // save the previous state for don't need recalculate the calculus bellow
    // every time which the name state change and the react component render again ( cause the react make the component all again when one state change)
    const total = useMemo(() => {
        console.log('useMemo execute');
        return (counter * 324242 * 2313123 * 23131321)
    }, [counter])

    function handlePlus(){
        setCounter((prevState) => prevState + 1);
    }

    return (
        <div>
            <h1>UseMemoExample</h1><br/><br/><br/>
            <h1>{counter}</h1>
            <h4>{total}</h4>
            <button onClick={handlePlus}>+</button>

            <br/><br/>
            <span>{name}</span><br/>
            <input type="text" onChange={e => setName(e.target.value)}/>
        </div>
    )
}
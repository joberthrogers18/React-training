import React, { useRef, useState } from 'react';

export default function useRefExample() {
    console.log('rendered');

    // if i'm not show determinate state in jsx
    // is not necessary render all the component again when state change
    // to keep this value save and not render all again we use 'useRef'

    const number = useRef(0);
    
    const inputRef = useRef(null);
    
    // const [number, setNumber] = useState(0);

    function handleSetValue() {
        const newNumber = Math.round(Math.random() * (10 - 1) + 1);
        number.current = newNumber
    }

    function handlePrintValue() {
        alert(number.current);
    }

    function handlePrintName() {
        alert(inputRef.current.value);
        inputRef.current.focus();
    }
    
    return (
        <div>
            <h1>Example useRef</h1>
            <br/>
            <div>
                <button onClick={handleSetValue}>Set value</button>
                <button onClick={handlePrintValue}>Print value</button>
            </div>
            <br/><br/>
            <div>
                <input ref={inputRef}/>
                <button onClick={handlePrintName}>Print name</button>
            </div>
        </div>
    )
}
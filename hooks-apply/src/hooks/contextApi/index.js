import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export default function ContextExample() {
    return (
        <ThemeContext.Provider value={{ mode: 'light' }}>
            <Button />
        </ThemeContext.Provider>
    )
}

function Button() {
    const theme = useContext(ThemeContext);
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <button>{ theme.mode }</button>
        </div>
    )
}
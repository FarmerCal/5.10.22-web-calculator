import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [display, setDisplay] = useState('');

    const onButtonPress = (id) => {
        if (id === '=') {
            // run display equation and return answer as the updated display using setDisplay
            console.log('equal was pressed')
            setDisplay((prevDisplay) => eval(prevDisplay));

        } else if (id === 'C') {
            setDisplay('');
            console.log('big C was pressed')
        } else {
            // append the new character to the display using setDisplay
            console.log(id, 'was pressed')
            setDisplay((prevDisplay) => prevDisplay + id);
        }
    }

    return (
        <Context.Provider value={{
            display,
            setDisplay,
            onButtonPress
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
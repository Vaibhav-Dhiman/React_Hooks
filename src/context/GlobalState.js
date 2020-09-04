import React, {createContext,useReducer} from 'react';
import AppReducer from './AppReducer';


// this file holds the global data such as stores
// Initial State 
const initialState  = {
    transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
 ]
}

// create context 
export const GlobalContext = createContext(initialState);

// provider component

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    //Actions which call reducers
    function deleteTransation(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    return (
    <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransation
    }}>
        { children }
    </GlobalContext.Provider>    
    );
}
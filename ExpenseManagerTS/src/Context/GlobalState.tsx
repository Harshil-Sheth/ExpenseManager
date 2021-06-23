import {createContext, useReducer} from 'react';
import reducer from './Reducer';
import {deleteAction, addAction, setError, resetError} from './Actions'

//initialState

const initialState : any={
    transactions:[],
    error:undefined,
}

// create context
export const GlobalContext = createContext(initialState);


//provider component

export const GlobalProvider=({ children }: any): any=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    
    function addTransaction(transaction : any) : any{
        dispatch(addAction(transaction));
    }

    function deleteTransaction(id : number): any{
        dispatch(deleteAction(id));
    }

    function errorHandler(error : any): any{
        dispatch(setError(error));
        console.log('error from global')
    }

    function resetErrorHandler() : any{
        dispatch(resetError());
    }


    return(    
        <GlobalContext.Provider
        value={{
            transactions: state.transactions,
            error: state.error,
            addTransaction,
            deleteTransaction,
            errorHandler,
            resetErrorHandler
        }}
        >
        {children}
        </GlobalContext.Provider>
    );
};
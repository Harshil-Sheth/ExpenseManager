export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const SET_ERROR = 'SET_ERROR';
export const RESET_ERROR = 'RESET_ERROR';

export const addAction = (transaction: any): any => ({
    type: ADD_TRANSACTION,
    payload: transaction,
});
export const deleteAction = (id: number): any => ({
    type: DELETE_TRANSACTION,
    payload: {id,error: undefined}
});
export const setError = (error: any): any => ({
    type: SET_ERROR,
    payload: error,
});
export const resetError = (): any => ({
    type: RESET_ERROR,
    payload: {error: undefined},
});
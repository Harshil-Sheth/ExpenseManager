import {DELETE_TRANSACTION,ADD_TRANSACTION,SET_ERROR,RESET_ERROR} from './Actions';

const reducer =  (state: any, action: any): any=>{
    switch (action.type) {
        case ADD_TRANSACTION:
            return{
                ...state,
                transactions: [action.payload,...state.transactions]
            };
        case DELETE_TRANSACTION:
            return{
                ...state,
                transactions: state.transactions.filter((transaction: any): boolean=>transaction.id!==action.payload.id),
                error: action.payload.error
            };
        case SET_ERROR:
            console.log(state,action ,':in reducer')
            return{
                ...state,
                error: action.payload
            };
        case RESET_ERROR:
            return{
                ...state,
                error: action.payload                
            };
        default:
            return state;
    }
}
export default reducer;
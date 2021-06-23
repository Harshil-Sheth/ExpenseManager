import {DELETE_TRANSACTION,ADD_TRANSACTION,SET_ERROR,RESET_ERROR} from './Actions';

const reducer =  (state, action)=>{
    switch (action.type) {
        case ADD_TRANSACTION:
            return{
                ...state,
                transactions: [action.payload,...state.transactions]
            };
        case DELETE_TRANSACTION:
            return{
                ...state,
                transactions: state.transactions.filter((transaction)=>transaction.id!==action.payload.id),
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
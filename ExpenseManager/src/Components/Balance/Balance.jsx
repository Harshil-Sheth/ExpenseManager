import React,{useContext} from 'react'
import {GlobalContext} from '../../Context/GlobalState'


const Balance = () => {
    const {transactions} = useContext(GlobalContext)

    const amounts=transactions.map((transaction)=>transaction.amount);
    const total=amounts.reduce((val, item)=>(val +=item),0).toFixed(2)

    return (
        <>
         <h4 className='balance'>Your Balance</h4>
      <h1 className='total'>${total}</h1>  
        </>
    )}
export default Balance;


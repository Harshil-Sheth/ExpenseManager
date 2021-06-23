import React,{useContext} from 'react'
import {GlobalContext} from '../../Context/GlobalState'


const Balance = (): any => {
    const {transactions} = useContext(GlobalContext)

    const amounts=transactions.map((transaction: any): number=>transaction.amount);
    const total=amounts.reduce((val:number, item: number): number=>(val +=item),0).toFixed(2)

    return (
        <>
         <h4 className='balance'>Your Balance</h4>
      <h1 className='total'>${total}</h1>  
        </>
    )}
export default Balance;


import React,{useContext} from 'react'
import {GlobalContext} from '../../Context/GlobalState'
import Transaction from './Transaction'

const TransactionList = (): any => {

    const {transactions} = useContext(GlobalContext)

    return (
        <>
            <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction: any): any=>(
            <Transaction key={transaction.id} transaction={transaction}/>
        ))}
      </ul>
        </>
    )
}

export default TransactionList

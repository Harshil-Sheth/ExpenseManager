import React,{useContext, useEffect} from 'react'
import {GlobalContext} from '../../Context/GlobalState'
import { useI18n } from '../../i18n';
import Transaction from './Transaction'

const TransactionList = () => {
    const { t } = useI18n();
    
    const {transactions} = useContext(GlobalContext)

    return (
        <>
            <h3>{t('history_list')}</h3>
      <ul className="list">
        {transactions.map((transaction)=>(
            <Transaction key={transaction.id} transaction={transaction}/>
        ))}
      </ul>
        </>
    )
}

export default TransactionList

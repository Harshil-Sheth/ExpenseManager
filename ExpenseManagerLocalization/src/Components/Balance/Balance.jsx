import React,{useContext, useEffect} from 'react'
import { useI18n } from '../../i18n';
import {GlobalContext} from '../../Context/GlobalState'


const Balance = () => {
    const { t } = useI18n();
   
    const {transactions} = useContext(GlobalContext)

    const amounts=transactions.map((transaction)=>transaction.amount);
    const total=amounts.reduce((val, item)=>(val +=item),0).toFixed(2)

    return (
        <>
         <h4 className='balance'>{t('heading_balance')}</h4>
      <h1 className='total'>${total}</h1>  
        </>
    )}
export default Balance;


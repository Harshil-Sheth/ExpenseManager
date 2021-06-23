import React,{useContext,useEffect,useState} from 'react'
import {GlobalContext} from '../../Context/GlobalState'
import { useI18n } from '../../i18n';

const AddDeleteTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] =useState(0)
    const {addTransaction, errorHandler, resetErrorHandler} = useContext(GlobalContext)

    const { t } = useI18n();
   

    const handleError = ()=>{
        if(text=== ''|| Number(amount)<=0){
            errorHandler('Please fill text and amount fields')
            console.log('error')
            return;
        }
        return;
    }

    const onAdd=(e)=>{
        e.preventDefault();
        resetErrorHandler();
        if(text!== ''&& Number(amount)>0){
            const newTransaction={id:Math.floor(Math.random()*100000000),text,amount:+amount};
            addTransaction(newTransaction);
        }
        handleError();
        setText('');
        setAmount(0)
        return;
    }
    const onExpense=(e)=>{
        e.preventDefault();
        resetErrorHandler();
        if(text!== ''&& Number(amount)>0){
            const newTransaction={id:Math.floor(Math.random()*100000000),text,amount:-amount};
            addTransaction(newTransaction);
        }
        handleError();
        setText('');
        setAmount(0)
        return;
    }

    return (
        <>
         <h3>{t('add_new_trans_list')}</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">{t('text_field')}</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder={t('text_field_inside')} />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >{t('amount_field')} <br />
            </label
          >
          <input type="number"  value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <div className='buttons'>
        <button className="btn deposit" onClick={onAdd}>{t('deposit_button')}</button>
        <button className="btn expense" onClick={onExpense}>{t('expense_button')}</button>
      
        </div></form>   
        </>
    )
}

export default AddDeleteTransaction

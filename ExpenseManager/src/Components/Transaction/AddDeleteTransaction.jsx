import React,{useContext,useState} from 'react'
import {GlobalContext} from '../../Context/GlobalState'

const AddDeleteTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] =useState(0)
    const {addTransaction, errorHandler, resetErrorHandler} = useContext(GlobalContext)


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
         <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            </label
          >
          <input type="number"  value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <div className='buttons'>
        <button className="btn deposit" onClick={onAdd}>Deposit</button>
        <button className="btn expense" onClick={onExpense}>Expense</button>
      
        </div></form>   
        </>
    )
}

export default AddDeleteTransaction

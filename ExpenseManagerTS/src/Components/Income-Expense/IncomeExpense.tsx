import React,{useContext} from 'react'
import {GlobalContext} from '../../Context/GlobalState'


const IncomeExpense = () : any=> {
        const {transactions} = useContext(GlobalContext)
    
        const amounts=transactions.map((transaction: any): any=>transaction.amount);
        const Income=amounts.filter((item: number): any=>item>0).reduce((val: number, item: number): any=>(val +=item),0).toFixed(2);
        const Expense=(amounts.filter((item: number): any=>item<0).reduce((val: number, item: number): any=>(val +=item),0)*-1).toFixed(2);
    
    
        return (
            <div className="inc-exp-container">
            <div>
              <h4 className='income-title'>Income</h4>
              <p className="money plus">+${Income}</p>
            </div>
            <div>
              <h4 className='expense-title'>Expense</h4>
              <p className="money minus">-${Expense}</p>
            </div>
          </div>
    )
}

export default IncomeExpense

import Balance from './Components/Balance/Balance'
import { Header } from './Components/Header/Header'
import IncomeExpense from './Components/Income-Expense/IncomeExpense'
import {Toast} from './Components/Toast/Toast'
import AddDeleteTransaction from './Components/Transaction/AddDeleteTransaction'
import TransactionList from './Components/TransactionList/TransactionList'
import {GlobalProvider} from './Context/GlobalState'
import './index.css';

function App() {
  return (
    <GlobalProvider>
    <div className='container'>
    <Header/>
    <Balance/>
    <IncomeExpense/>
    <TransactionList/>
    <AddDeleteTransaction/>
    </div>
    <Toast/>
    </GlobalProvider>
  );
}

export default App;

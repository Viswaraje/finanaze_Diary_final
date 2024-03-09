import React from 'react'
import Balance from './BudgetComp/Balance'
import IncomeExpense from './BudgetComp/IncomeExpense'
import TransactionList from './BudgetComp/TransactionList'
import './BudgetComp/Budget.css'
import AddTransaction from './BudgetComp/AddTransaction'
import { GlobalProvider } from '../Context/GlobalState'
import { Link } from 'react-router-dom'
export default function Budget() {
  return (
<GlobalProvider>
    <h1 className="font-bold text-4xl text-center"> Expense Tracker</h1>
    <div className="budget-container">
    <Balance/>
    <IncomeExpense/>
    <TransactionList/>
    <AddTransaction/>
    </div>

    <div className="container mx-auto text-center">
  <div className="button inline-block">
    <Link to="/stocks" className="btn bg-pink-500 text-white-700 border-blue-400 text-white border border-blue-700 hover:bg-gradient-to-r from-purple-300 to-blue-500 p-5 rounded-md">
      I am done!!Ready for the next hack 📚
    </Link>
  </div>
</div>

</GlobalProvider>




    
  )
}

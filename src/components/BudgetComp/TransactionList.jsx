import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalState'
import Transaction from './Transaction';

export default function TransactionList() {

    const {transactions}=useContext(GlobalContext);
    
  return (
    <>
     <h3 className="font-bold text-2xl text-center">History</h3>
      <ul className="list">
        {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction}/> ))}
         
      </ul>
  </>
  )
}


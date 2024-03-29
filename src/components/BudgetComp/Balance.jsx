import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalState';

export default function Balance() {
    const {transactions}=useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h4 className="font-bold text-2xl text-center">Your Balance</h4>
      <h1 className="font-bold text-xl text-center"  id="balance">${total}</h1>

    </div>
  )
}

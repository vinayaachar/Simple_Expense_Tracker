import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {

  const { transactions } = useContext(GlobalContext)

  //calculate income which is all the +$$

  const amount = transactions.map(transaction => transaction.amount)

  const income = amount.filter(item => item > 0).reduce((acc, item) => acc += item, 0).toFixed(2)

  const expense = amount.filter(item => item < 0).reduce((acc, item) => acc += item, 0).toFixed(2)


  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" className="money plus">+${income}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" className="money minus">-${expense}</p>
    </div>
  </div>
  )
}

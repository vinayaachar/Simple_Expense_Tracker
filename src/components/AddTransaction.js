import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {

  const {transactions, addTransaction} = useContext(GlobalContext)

  const maxItems = transactions.length

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)


  function onSubmit(e) {
    e.preventDefault()
    const transaction = {
      id: maxItems + 1,
      text: text,
      amount: parseInt(amount, 10)
    }
    addTransaction(transaction)

  }



  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value ={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target
            .value)} placeholder="Enter amount..." />
        </div>
        <input className="btn" type='submit' value='Add transaction'/>
      </form>
    </>
  )
}

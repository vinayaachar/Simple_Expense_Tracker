import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'


const initialstate = {
  transactions: []
}

// create context
export const GlobalContext = createContext(initialstate)

//create provider

export const GlobalProvider = ( {children} ) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate)

  //Actions

  //Add transaction
  function addTransaction(transaction) {
    console.log(transaction)
    dispatch({
      type: 'Add',
      payload: transaction
    })
    console.log(state.transactions)
  }

  //Delete transaction
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE',
      payload: id
    })
  }

  return(<GlobalContext.Provider value={{
    transactions: state.transactions,
    addTransaction,
    deleteTransaction
  }}>
    {children}
  </GlobalContext.Provider>)
}
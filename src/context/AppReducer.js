// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  console.log(action.payload)
  switch(action.type) {
    case 'Add':
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      }

    case 'DELETE':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    default:
      return state
  }
}
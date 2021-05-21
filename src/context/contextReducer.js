//Reducer - Single Function that specifies how will change our state!!
// 1) A function that takes in the old state and an action => new State, 
// 3) Action specifies how do we want to change the state !!
// 4) const transactions = [{ id : 1 }, { id : 2 }, { id : 3}]

// Creating Reducers
const contextReducer = (state, action) => {
    let transactions;
    switch (action.type) {
        case "DELETE_TRANSACTION":
            // Transactions is an Array 
            transactions = state.filter((transaction) => transaction.id !== action.payload)
            return transactions;

        case "ADD_TRANSACTION":
            transactions = [action.payload, ...state]
            return transactions;
        default:
            return state;
    }

}

export default contextReducer;
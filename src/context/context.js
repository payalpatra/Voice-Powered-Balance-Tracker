import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [{"amount":2321,"category":"Salary","type":"Income","date":"2021-05-27","id":"b1398742-da50-4c41-ae0d-edf5bb15488e"}];
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    // const [state, dispatch] = useReducer(contextReducer, initialState);
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // Action Creators
    const deleteTransaction = (id) => dispatch({ type: "DELETE_TRANSACTION", payload: id });
    const addTransaction = (transaction) => dispatch({ type: "ADD_TRANSACTION", payload: transaction });
    const balance = transactions.reduce((acc , currVal)=> {
        return currVal.type === "Expense" ? acc - currVal.amount: acc + currVal.amount
        },0)
    
    return (
        <ExpenseTrackerContext.Provider value={{

            deleteTransaction, addTransaction, transactions,balance
        }} >
            {children}
        </ExpenseTrackerContext.Provider>
    )

}

import React, {useReducer, createContext} from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{amount: 100, category: "Investments", type: "Income", date: "2023-03-29",id: "41b51622-511e-4802-9cc9-e8744f0787a8", type: "Income"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //action creators
    const  deleteTransaction = (id) => {
        dispatch({type: 'DELETE_TRANSACTION', payload: id});
    }

    const  addTransaction = (transaction) => {
        dispatch({type: 'ADD_TRANSACTION', payload: transaction});
    }

    const balance = transactions.reduce((acc,currVal)=>{
        return (currVal.type==='Expense' ? acc-currVal.amount : acc+currVal.amount);
    },0);

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction, addTransaction, transactions, balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
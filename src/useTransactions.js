import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";

// ---------- Custom Hooks ---------- \\

/// transactionsPerType \\\

/* const transactionsPerType = [
    { id : 1,type: "Income",amount: 50,category: "salary"}
    { id : 1,type: "Income",amount: 50,category: "Extra income"}
    { id : 1,type: "Income",amount: 50,category: "Business"}
]
*/

/// Categories \\\

/*  const incomeCategories = [
   { type: 'salary"', amount: 50, color: incomeColors[0] },
   { type: 'Extra income', amount: 50, color: incomeColors[1] },
   { type: 'Business', amount: 60, color: incomeColors[2] },
 ];*/

const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
    const transactionsPerType = transactions.filter((transaction) => transaction.type === title);
    const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0);
    const categories = title === "Income" ? incomeCategories : expenseCategories;
    console.log({ categories, total, transactionsPerType })

    transactionsPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category)
        if (category) category.amount += t.amount;
    });

    // Removing categories whose amount is 0
    const filteredCategories = categories.filter((c) => c.amount > 0)

    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color)
        }],
        labels: filteredCategories.map((c) => c.type)
    }

    return {total, chartData }
}

export default useTransactions;
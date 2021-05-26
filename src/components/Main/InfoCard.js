import React from 'react'

const isIncome = Math.round(Math.random())
function InfoCard() {
    return (
        <div style={{ textAlign: 'center', padding: "0 10%" }}>
            Try Saying : <br/>
             Add {isIncome ? "Income " : "Expense "}
             Of {isIncome ? " ₹100 " : " ₹500 "}
             In Category {isIncome ? "Business " : "Shopping "}
             For {isIncome ? "Monday" : "Tuesday"} !!
        </div>
    )
}

export default InfoCard

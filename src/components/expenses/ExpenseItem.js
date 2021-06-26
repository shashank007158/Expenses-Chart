import React from "react"
import ExpenseDate from "./ExpenseDate"
const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={props.expenseDate} />
      </div>
      <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
        <div className="expense-item__price">${props.expensePrice}</div>
      </div>
    </div>
  )
}
export default ExpenseItem

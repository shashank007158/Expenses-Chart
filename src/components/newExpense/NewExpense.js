import React from "react" //Its not necessary to import
import ExpenseForm from "./ExpenseForm"
const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    }
    props.onSaveNewData(newExpenseData)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}
export default NewExpense

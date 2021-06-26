import React, { useState } from "react"
import ExpenseItem from "./components/expenses/ExpenseItem"
import NewExpense from "./components/newExpense/NewExpense"
import ExpenseFilter from "./components/expenses/ExpenseFilter"
import ExpensesChart from "./components/expenses/ExpensesChart"

function App() {
  const [expenseItems, setExpenseItems] = useState([
    {
      id: 1,
      title: "Car Insurance",
      amount: "250",
      date: new Date(),
    },
    {
      id: 2,
      title: "Bike Insurance",
      amount: "300",
      date: new Date(2021, 3, 28),
    },
    {
      id: 3,
      title: "Cycle Insurance",
      amount: "350",
      date: new Date(2020, 3, 12),
    },
  ])
  const newDataHandler = (newExpenseData) => {
    setExpenseItems((prevValue) => [newExpenseData, ...prevValue])
  }
  const expenseItemDisplay = (expenseItem) => {
    return (
      <ExpenseItem
        key={expenseItem.id}
        expenseDate={expenseItem.date}
        expenseTitle={expenseItem.title}
        expensePrice={expenseItem.amount}
      />
    )
  }
  const [filteredYear, setFilteredYear] = useState("2020")
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = expenseItems.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })
  let expenseContent = ""
  filteredExpenses.length > 0
    ? (expenseContent = filteredExpenses.map((expense) =>
        expenseItemDisplay(expense)
      ))
    : (expenseContent = (
        <h2 className="expenses-list__fallback">No expenses found</h2>
      ))

  return (
    <div>
      <NewExpense onSaveNewData={newDataHandler} />
      <div className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expense={filteredExpenses} />
        {expenseContent}
      </div>
    </div>
  )
}

export default App

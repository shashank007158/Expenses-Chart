import React, { useState } from "react"

const ExpenseForm = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  })
  const { title, amount, date } = formData
  const changeHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }
  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    }

    props.onSaveExpenseData(expenseData)
    setFormData({ title: "", amount: "", date: "" })
  }
  const [action, setAction] = useState(false)
  const showAction = () => setAction(true)
  const closeAction = () => setAction(false)

  return action ? (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            name="amount"
            value={amount}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            name="date"
            value={date}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={closeAction}>Cancel</button>
        <button onClick={showAction} type="submit">
          Add Expense
        </button>
      </div>
    </form>
  ) : (
    <div style={{ textAlign: "center" }} className="new-expense__actions">
      <button onClick={showAction} type="submit">
        Add Expense
      </button>
    </div>
  )
}
export default ExpenseForm

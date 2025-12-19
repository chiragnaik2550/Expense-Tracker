import { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm(props) {

    const [enteredTitle,setEnteredTitle] = useState('')
    const [enteredAmount,setEnteredAmount] = useState('')
    const [enteredDate,setEnteredDate] = useState('')

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
        }
        props.onsaveExpenseData(expenseData)
        console.log(expenseData);

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__contr">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__contrl">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__contrl">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>

            <div>
                <button className="new-expense__action">Add Expenses</button>
            </div>    
        </form>
    )
}

export default ExpenseForm;
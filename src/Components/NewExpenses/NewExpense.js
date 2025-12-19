import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
function NewExpense(props) {
    const saveExpenseDataHandler=(enteredexpenseData)=>{
        const ExpenseData= {
            ...enteredexpenseData,
            id: Math.random().toString(),
        }
        console.log(enteredexpenseData)
        props.onaddExpense(ExpenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onsaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense;
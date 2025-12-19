import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import { useState } from 'react';
function ExpenseItem(props) {
    let[newTitle,setNewTitle] = useState('New Title')
    let[title,setTitle] = useState(props.title)
    function changeTitle() {
        setTitle(newTitle) 
    }
    const changeHandler=(event)=> {
        setNewTitle(event.target.value)
    }
    return (
        <Card className="expense-item">
            {/* <div>{props.date.toISOString()}</div>  */}
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">₹{props.price}</div>
                <input type='text' value={newTitle} onChange={changeHandler}></input>
                <button onClick={changeTitle}>Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;
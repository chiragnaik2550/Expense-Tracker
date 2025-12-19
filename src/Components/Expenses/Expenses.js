import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from "../UI/Card";
function Expenses(props){
    return (
        <Card className='expenses'>
            <ExpenseItem
            date={props.item[0].date}
            title={props.item[0].title}
            price={props.item[0].amount}>
            </ExpenseItem>
            <ExpenseItem
                date={props.item[1].date}
                title={props.item[1].title}
                price={props.item[1].amount}>
            </ExpenseItem>
            <ExpenseItem
                date={props.item[2].date}
                title={props.item[2].title}
                price={props.item[2].amount}>
            </ExpenseItem>
        </Card>
    );
}

export default Expenses;
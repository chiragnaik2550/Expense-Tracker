import Expenses from "./Components/Expenses/Expenses"
import './App.css'
import NewExpense from "./Components/NewExpenses/NewExpense";

function App() {
  // let expenseDate=new Date(2025,4,11);
  // let expenseTitle='Car Insurance';
  // let expensePrice=300;

  let expenses=[
    {
      id:'e1',
      title:'Car Insurance',
      date:new Date(2025,4,11),
      amount:300
    },
    {
      id:'e2',
      title:'House Rent',
      date:new Date(2025,5,12),
      amount:400
    },
    {
      id:'e3',
      title:'Tuition Fees',
      date:new Date(2025,6,15),
      amount:700
    }
  ]

  const addExpenseHandler=(expense)=>{
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onaddExpense={addExpenseHandler}></NewExpense>
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
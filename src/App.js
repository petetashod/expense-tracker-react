import React, {useState, useEffect} from 'react' ;
import Form from './Form';
import Table from './Table';



function App(){
  const [expense, setTypeExpense] = useState({
    currency:"",
    description:"",
    amount:"",
    date:"",
    id: Math.floor(Math.random()) * 100
  });
 
  const [expenses, setTypeExpenses] = useState([])

  useEffect(() => {
    console.log("description", expense.description);
    console.log("amount", expense.amount);
    console.log("currency", expense.currency);
    console.log("date", expense.date);
  },[expense])

  return(
    <div>
      <h1>Expense Tracker</h1>
      
      <Form 
        setTypeExpense={setTypeExpense}
        expense={expense}
        expenses={expenses}
        setTypeExpenses={setTypeExpenses}
      />
      <Table
        setTypeExpenses={setTypeExpenses}
        expenses={expenses}
        expense={expense}
      
      />

    </div>



  );
}



 export default App;
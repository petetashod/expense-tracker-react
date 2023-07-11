
import  React from 'react';
//import App from './App';


const Table = ({expenses,setTypeExpenses,expense}) =>{
    const dateConverter = (dateFromExpenseItem) => {
        const month = new Date(dateFromExpenseItem).getMonth() +1;
        const day = new Date(dateFromExpenseItem).getDate() +1;
        const year = new Date(dateFromExpenseItem).getFullYear();
        return `${month}-${day}-${year}`;
    }
        
    const allExpenses = expenses.map((expenseItem,index) => {
        return (
            <tr key={index}>
                <td>{expenseItem.currency}</td>
                <td>{expenseItem.description}</td>
                <td>{expenseItem.amount}</td>
                <td>{dateConverter(expenseItem.date)}</td>
                <td><button onClick={()=>{
                    const filterData = expenses.filter((expense) => {
                        return  expense.id !== expenseItem.id;
                    })
        
                    setTypeExpenses(filterData)
                }}>X</button></td>
            </tr>
            
        )

    })
    
    return(
    <div>
        <table className='table text-center'>
            <thead>
                <tr>
                    <th scope="col">Currency</th>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
            {allExpenses}
            </tbody>
        </table>
    </div>

    )

};


export default Table;









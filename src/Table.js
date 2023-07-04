
import  React from 'react';
//import App from './App';


const Table = ({expenses}) =>{
    const allExpenses = expenses.map((expenseItem,index) => {
        return (
            <tr key={index}>
                <td>{expenseItem.currency}</td>
                <td>{expenseItem.description}</td>
                <td>{expenseItem.amount}</td>
                <td>{expenseItem.date}</td>
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









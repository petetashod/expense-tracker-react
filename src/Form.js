import React from 'react';
//import App from './App';


const Form = ({setTypeExpense,expense,expenses,setTypeExpenses}) => {
   
    const handleOnClick = () => {
       const newExpensesArray = [
        ...expenses
        
        
       ]
       newExpensesArray.push(expense);
       setTypeExpenses(newExpensesArray);
    };
   
    const handleChangeDescription = (e) => {
        const newExpenseObject = {
            ...expense,
            description: e.target.value,
        }
        setTypeExpense(newExpenseObject); 
       
    };

    const handleChangeAmount = (e) => {
       const newExpenseObject = {
            ...expense,
            amount: e.target.value
        }
        
        setTypeExpense(newExpenseObject); 
    };
    const handleChangeCurrency = (e) => {
        const newExpenseObject = {
            ...expense,
            currency: e.target.value,
        }
        
        setTypeExpense(newExpenseObject); 
    };
    const handleChangeDate = (e) => {
        const newExpenseObject = {
            ...expense,
            date: e.target.value,
        
        };  
        
    setTypeExpense(newExpenseObject); 
    };
    
    return (
    <>
        <div>
            <form className='formContainer'>
                <div className="form-group selectionContainer">
                <label htmlFor="type">Type:</label>
                        <select onChange={handleChangeCurrency} className="form-control">
                            <option>Card</option>
                            <option>Cash</option>
                            <option>Crypto</option>
                            <option>Other</option>
                        </select>
                    
                </div>
                <div className="form-group" >
                    <input type="text"  id="expense"  placeholder="what was the expense for?" 
                    onChange={handleChangeDescription} className="form-control"
                    />
                </div>
                <div className="form-group">
                    <input id="amountInput"type="text" placeholder="How Much?" 
                    onChange={handleChangeAmount} className="form-control"
                    />
                </div>
                <div className="form-control dateContainer" >
                    <input id="date" type="date"  placeholder="mm/dd/yyyy" 
                    onChange={handleChangeDate} className="form-control"/> 
                </div>
            </form>
            <span className='btnContainer'> 
                <button  type="button" className=' btn btn-primary' 
                onClick={handleOnClick}
                >Add Expense</button>
            </span>
        </div>
    </>
    )
};


export default Form;
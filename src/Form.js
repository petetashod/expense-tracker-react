import React from 'react';
//import App from './App';
import { useState } from 'react';

const Form = () => {
    const [type, setTypeCurrency] = useState("");
    const [expense, setTypeExpense] = useState("");
    // const [date,setTypeDate] = useState("");
    const [amount, setMoneyAmount] = useState("");
    
    // const handleOnClick = (e) => {
    //     setTypeCurrency(e.target.id);
    //     setTypeExpense(e.target.id);
    //     // setTypeDate(e.target.value)
    //     setMoneyAmount(e.target.id);

    // };
    // const handleChange = (e) => {
    //     setTypeExpense(e.target.value)
        
    // };

    // const handleChangeAmount = (e) => {
    //     setMoneyAmount(e.target.value)
    // };
    return (
    <div>
        <form>
            <div className="selectionContainer">
            <label htmlFor="type">Type:</label>
                    <select>
                        <option >Card</option>
                        <option >Cash</option>
                        <option >Crypto</option>
                        <option >Other</option>
                    </select>
                 
            </div>
            <div className="inputContainer" id="expense">
                <input type="text"  placeholder="what was the expense for?" />
            </div>
            <div className="inputContainer" id="amountInput">
                <input type="text" placeholder="How Much?" />
            </div>
            <div className="inputContainer" id="date">
                <input type="date"  placeholder="mm/dd/yyyy"/>
            </div>
        </form>
        <span className="buttonStyling" id="button"> 
            <button type="button"className=' btn btn-primary' >Add Expense</button>
        </span>
    </div>
    )
};


export default Form;
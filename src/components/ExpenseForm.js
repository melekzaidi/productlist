import React, { useState } from 'react'
import "./ExpenseForm.css"

function ExpenseForm(props) {
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');

    const [date,setDate]=useState('');
    const titlehandler=(event)=>{
        setTitle(event.target.value)
        console.log(title);
    }
    const amounthandler=(event)=>{
        setAmount(event.target.value)
        console.log(amount);
    }
    const datehandler=(event)=>{
        setDate(event.target.value)
        console.log(date);
    }
    const submithandler=(event)=>{
event.preventDefault();
const expense={
    id:Math.random(),  title:title,date:new Date(date),price:amount,
}
props.onload(expense);
    }
  return (
    <form onSubmit={submithandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" onChange={titlehandler} value={title}/>
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={amounthandler} />
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" onChange={datehandler} />
        </div>
<div className="new-expense__actions">
    <button type='submit' >Add Expense</button>
</div>
        </div>
    </form>
  )
}
export default ExpenseForm;
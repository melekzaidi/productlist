import React from 'react'
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
const load=(expense)=>{
console.log(expense)
props.addexpense(expense)
}
  return (
      <div className='new-expense'>
    <ExpenseForm onload={load}/>
    </div>

  )
}
export default NewExpense;
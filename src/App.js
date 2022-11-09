import React , { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";
import "./expenses.css"
import Card from './Card';
import NewExpense from './components/NewExpense';
import ExpensesFilter from './components/Expencefilter';


function App() {
  const [filteryear,setfilteryear]=useState();
  const [expenses,setExpense]=useState([
   

  ]);
  const addexpense=(ex)=>{
setExpense((prevExpense)=>{ return[ex, ...prevExpense] })
console.log(expenses);


  }
  const onChangeFilter=(e)=>{
    setfilteryear(e);
    console.log(e);
  }
  const filteryearexpence=expenses.filter(expense=>{return expense.date.getFullYear().toString()===filteryear})

  
  return (
 <div>
 <NewExpense addexpense={addexpense}/>
   <Card
   className='expenses'>
      <ExpensesFilter onChangeFilter={onChangeFilter} />

{filteryearexpence.length==0 && <h1 className='expenses-list__fallback'>not found</h1>}
 {filteryearexpence.length>0 &&   filteryearexpence.map((expense)=>(
 
 <ExpenseItem title={expense.title} amount={expense.price} date={expense.date} key={expense.id}/>))}
</Card></div>
  );
}

export default App;

import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        name={props.expenses[0].title}
        charge={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        name={props.expenses[1].title}
        charge={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        name={props.expenses[2].title}
        charge={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        name={props.expenses[3].title}
        charge={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}
export default Expenses;

import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //calling the inbuilt filter() method in js with a function as parameter which inturn returns a boolean
  //filteredExpenses will store an array
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterHandler}
        ></ExpensesFilter>

        {/*map() is a built in js function which gives an array of expenses_array in App.js*/}
        {filteredExpenses.map((expenseObj) => (
          <ExpenseItem
            //key helps in identifying individual items of a component
            key={expenseObj.id}
            title={expenseObj.title}
            amount={expenseObj.amount}
            date={expenseObj.date}
          />
        ))}
      </Card>
    </div>
  );
}
export default Expenses;

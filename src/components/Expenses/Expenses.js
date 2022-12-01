import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
        {/*props filtered expenses sent to chart*/}
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        {/*If filteredExpenses.length was empty then variable is displayed as it is, otherwise if-else statement changes the value of this variable*/}
        <ExpensesList list={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;

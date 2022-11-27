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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterHandler}
        ></ExpensesFilter>

        {/*map() is a built in js function which gives an array of expenses_array in App.js*/}
        {props.items.map((expenseObj) => (
          <ExpenseItem
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

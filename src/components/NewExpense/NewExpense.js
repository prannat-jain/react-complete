import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [editingStatus, setEditingStatus] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      //giving id to user input passed up from expenseForm
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditingStatus(false);
  };

  const startEditingHandler = () => {
    setEditingStatus(true);
  };

  const stopEditingHandler = () => {
    setEditingStatus(false);
  };

  return (
    <div className="new-expense">
      {/* if editingStatus is false button will be displayed to ask to start editing*/}
      {!editingStatus && (
        <button onClick={startEditingHandler}>Add New Entry</button>
      )}
      {/*onSaveExpenseData is a prop which receives value from saveExpenseDataHandler which inturn receives user input from ExpenseForm*/}
      {editingStatus && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
//test

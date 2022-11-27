//here useState is used for storing input values
//states have a benefit over storing values in global variables: we can use two-way binding, i.e pass new values again and again and rerender the page.
import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //use state is empty to store input string in them
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //alternative way(1)(using single states instead of multiple):
  //const [userInput, setUserInput] = useState({
  //  enteredTitle: '',
  //  enteredAmount: '',
  //  enteredDate: '',
  //});

  //in vanilla js doc.getElementbyId().addEventListener('click',here we just write the value instead of the function thats hidden, that hidden funstion is 'event' ())
  //event listener function for input
  const titleChangeHandler = (event) => {
    //chack console for more details
    setEnteredTitle(event.target.value);
    //alternative way(1):
    //setUserInput((prevState) => {
    //return{ ...prevState, enteredTitle: event.target.value};
    //});
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //we get even object automatically because of listener in onSubmit
  const submitHandler = (event) => {
    //preventdefault will stop the webpage refreshing everytime we submit the form
    event.preventDefault();

    //expense data object having user input
    //ultimately we want to send expenseData to App.js array database....
    //to do that we are going to go child to parent: Expenseform>NewExpense>App.js
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //executing function in ExpenseData whose reference/pointer is received by props
    props.onSaveExpenseData(expenseData);
    //resetting the fields after form is submitted
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

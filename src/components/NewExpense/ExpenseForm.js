import React from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  //in vanilla js doc.getElementbyId().addEventListener('click',here we just write the value instead of the function thats hidden, that hidden funstion is 'event' ())
  //event listener function for input
  const nameChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

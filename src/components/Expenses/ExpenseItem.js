//useState is a single fucntion imported for onclick dynamic function to work
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //react hook(function) for onclick..useState will give two values
  //title is the default state value, changeTitle is the new/updated state
  //const [title, changeTitle] = useState(props.title);

  //function clickHandler() {
  //the state changed value is used here in the function
  //because of this below change in value, we want to rerender html parts using states
  //we do not use this: title = "Updated!", but use the state function changeName
  //changeTitle("Updated!");
  //console.log(title);
  //}

  return (
    //replaced return div with a custom card component that gives the card look
    //cannot set a classname to a custom div therefore expenseitem.css wont work by default...need to make changes for that in card.js
    <Card className="expense-item">
      {/*making the dates look nicer in expensedata....Using date(props) passed to this class from app.js and passing it to expensedate.js as props again*/}
      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

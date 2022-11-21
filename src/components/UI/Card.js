import React from "react";
import "./Card.css";
//separate component for the card look of the file
//the props.children means everything inside the custom card div in ExpenseItem

function Card(props) {
  //card+ whitespace + props.classname enables adding classname to any custom div
  const classes = "card " + props.className;
  return <div className={classes}> {props.children} </div>;
}
export default Card;
